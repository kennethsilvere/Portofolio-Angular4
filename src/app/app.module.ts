import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ForyouComponent } from './foryou/foryou.component';
import { SkillsComponent } from './skills/skills.component';
import { InfoBubbleComponent } from './info-bubble/info-bubble.component';
import { FlashlightComponent } from './info-bubble/flashlight/flashlight.component';
import { InfoService } from './services/info.service';
import { FlashService } from './services/flash.service';
import { NotifyService } from './services/notify.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    ForyouComponent,
    SkillsComponent,
    InfoBubbleComponent,
    FlashlightComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [InfoService, FlashService, NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
