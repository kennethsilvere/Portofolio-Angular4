import { EventEmitter } from '@angular/core';

export class NotifyService{
    
    notifier = new EventEmitter<any[]>();

}