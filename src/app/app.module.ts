import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDatePickerModule } from 'mydatepicker';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { ChildDatepickerComponent } from './child-datepicker/child-datepicker.component';
import { DpComponent } from './dp/dp.component';
import { EmitterComponent } from './emitter/emitter.component';






@NgModule({
  declarations: [AppComponent, ChildDatepickerComponent, DpComponent, EmitterComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MyDatePickerModule,
    ReactiveFormsModule,
    FormsModule,
    MyDateRangePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
