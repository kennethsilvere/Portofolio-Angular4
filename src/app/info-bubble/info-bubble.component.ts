import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InfoService } from '../services/info.service';
import { FlashService } from '../services/flash.service';

@Component({
  selector: 'app-info-bubble',
  templateUrl: './info-bubble.component.html',
  styleUrls: ['./info-bubble.component.css']
})
export class InfoBubbleComponent implements OnInit {

  @Output() showBubble = new EventEmitter<boolean>();

  @Input() shouldFlash:boolean = false;

  bubbleMessage: string;

  constructor(private infoService: InfoService, private flashService: FlashService) { }

  ngOnInit() {
    this.flashTheLight();
    this.bubbleMessage = this.infoService.message;
  }

  
  flashTheLight(){
    this.shouldFlash = true;

    setTimeout(()=>{
      this.shouldFlash = false;
    },1500);
  }

 
  closeBubble(){
    this.flashService.flasher.emit(false);
    return false;
  }

}
