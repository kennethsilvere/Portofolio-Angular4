import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-flashlight',
  templateUrl: './flashlight.component.html',
  styleUrls: ['./flashlight.component.css']
})
export class FlashlightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.flashOrNo == true){
      this.flashIt();
      this.flashOrNo = null;
    }else{

    }
  }

  @Input() flashOrNo: boolean;

  flashInterval;

  flash: boolean = true;

  flashIt(): void{
    this.flashInterval = setInterval(()=>{
      this.flash = !this.flash;
    },
    200);

    setTimeout(()=>{
      clearInterval(this.flashInterval);
    },900);
}


}
