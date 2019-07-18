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
import { Dp1ChildComponent } from './dp1-child/dp1-child.component';
import { Dp2ChildComponent } from './dp2-child/dp2-child.component';
import { DpParentComponent } from './dp-parent/dp-parent.component';
import { AddmoreformComponent } from './addmoreform/addmoreform.component';
import { DesignComponent } from './design/design.component';
import { ChangeComponent } from './change/change.component';
import { FailComponent } from './fail/fail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { ServiceService } from './service.service';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';







@NgModule({
  declarations: [AppComponent, ChildDatepickerComponent, DpComponent,
     EmitterComponent, Dp1ChildComponent, Dp2ChildComponent,
      DpParentComponent, AddmoreformComponent, DesignComponent,
      ChangeComponent, FailComponent, LoginComponent, RegisterComponent, SuccessComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MyDatePickerModule,
    ReactiveFormsModule,
    FormsModule,
    MyDateRangePickerModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
