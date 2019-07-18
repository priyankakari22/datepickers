import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DpComponent } from './dp/dp.component';
import { ChildDatepickerComponent } from './child-datepicker/child-datepicker.component';
import { EmitterComponent } from './emitter/emitter.component';
import { Dp1ChildComponent } from './dp1-child/dp1-child.component';
import { Dp2ChildComponent } from './dp2-child/dp2-child.component';
import { DpParentComponent } from './dp-parent/dp-parent.component';
import { AddmoreformComponent } from './addmoreform/addmoreform.component';
import { DesignComponent } from './design/design.component';
import { LoginComponent } from './login/login.component';
import { ChangeComponent } from './change/change.component';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path: 'dp', component: DpComponent },
  {path: 'child', component: ChildDatepickerComponent},
  {path: 'emit', component: EmitterComponent },
  {path: 'dp1', component: Dp1ChildComponent},
  {path: 'dp2', component: Dp2ChildComponent},
  {path: 'dp-parent', component: DpParentComponent},
  {path: 'addform', component: AddmoreformComponent},
  {path: 'design', component: DesignComponent},
  {
    path: 'pswd',
    component: ChangeComponent,
    data: { title: 'change password' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login Form' }
  },
  {
    path: 'succuss',
    component: SuccessComponent ,
    data: { title: 'success' }
  },
  {
    path: 'fail',
    component: FailComponent,
    data: { title: 'fail' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
