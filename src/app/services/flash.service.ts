import { EventEmitter } from '@angular/core';

export class FlashService{

    flasher = new EventEmitter<boolean>();

    flashing: boolean = false;

}