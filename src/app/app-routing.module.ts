import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DpComponent } from './dp/dp.component';
import { ChildDatepickerComponent } from './child-datepicker/child-datepicker.component';
import { EmitterComponent } from './emitter/emitter.component';


const routes: Routes = [
  {path: 'dp', component: DpComponent },
  {path: 'child', component: ChildDatepickerComponent},
  {path: 'emit', component: EmitterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
