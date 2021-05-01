import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{path:'auth',loadChildren:()=>
import('./auth/auth.module').then(mod=>mod.AuthModule)},
{path:'home',loadChildren:()=>
import('./home/home.module').then(mod=>mod.HomeModule)},
{path:'report',loadChildren:()=>
import('./report/report.module').then(mod=>mod.ReportModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
