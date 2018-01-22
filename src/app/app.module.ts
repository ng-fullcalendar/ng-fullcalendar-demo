import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FullCalendarModule } from 'ng-fullcalendar';

import { AppComponent } from './app.component';
import { EventSesrvice } from './event.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule, FullCalendarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ EventSesrvice ]
})
export class AppModule { }
