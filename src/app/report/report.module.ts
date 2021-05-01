import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { EditComponent } from './edit/edit.component';
import { ReadComponent } from './read/read.component';
import { SubmitComponent } from './submit/submit.component';


@NgModule({
  declarations: [EditComponent, ReadComponent, SubmitComponent],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
