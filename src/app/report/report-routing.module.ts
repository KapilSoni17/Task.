import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ReadComponent } from './read/read.component';
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  {path:'submit',component:SubmitComponent},
  {path:'read',component:ReadComponent},
  {path:'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
