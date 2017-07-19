import { Component, OnInit } from '@angular/core';
import { InfoService } from './services/info.service';
import { FlashService } from './services/flash.service';
import { NotificationsService } from 'angular2-notifications';
import { NotifyService } from './services/notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  flash: boolean = false;
  screen: Screen;
  mobile: boolean = window.innerWidth < 550 ;
  public options = {
    position: ["top", "right"],
    timeOut: 5000,
    lastOnBottom: true
  }

  constructor(private infoService: InfoService,
              private flashService: FlashService,
              private notificationService: NotificationsService,
              private notifyService: NotifyService){}

  ngOnInit(){

    


    this.flashService.flasher.subscribe(
      (flashing: boolean) => {
        this.flash = flashing;
      }
    );

    this.notifyService.notifier.subscribe(
      (params: any[]) => {
        this.notify(params[0], params[1], params[2], params[3], params[4]);
      }
    );

    
                
  }



  showHeader(){
    if(this.flash == true && this.mobile){
      return false;
    }else{
      return true;
    }

  }

  public notify(title: string, content: string, type: string, time: number, progress:boolean): void{
    if(type == 'info'){      
          this.notificationService.info(
                  title,
                  content,
                  {
                      timeOut: time,
                      showProgressBar: progress,
                      pauseOnHover: false,
                      clickToClose: true,
                      maxLength: 100
                  }
              );
    }
    
    else if(type == 'success'){

      this.notificationService.success(
                  title,
                  content,
                  {
                      timeOut: time,
                      showProgressBar: progress,
                      pauseOnHover: false,
                      clickToClose: true,
                      maxLength: 10
                  }
              );

          }
    }

}
