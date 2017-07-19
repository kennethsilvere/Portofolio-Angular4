import { Component, OnInit } from '@angular/core';
import { FlashService } from '../services/flash.service';
import { InfoService } from '../services/info.service';
import { NotifyService } from '../services/notify.service'

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  flash: boolean = false;

  constructor(private flashService: FlashService, 
              private infoService: InfoService,
              private notifyService: NotifyService) {}

  ngOnInit() {
    this.flashService.flasher.subscribe(
      (flashing: boolean) => this.flash = flashing
    );
  }

  generateInfo(){
    //this.flash = true;
    //this.infoService.message = "From Kenneth !";
    //this.flashService.flasher.emit(true);
    this.notifyService.notifier.emit(["From Aboutme", "Its Working!!", "info", 5000, true]);
  }

  closeBubble(){
    this.flash = false;
    this.flashService.flasher.emit(false);
  }
}
