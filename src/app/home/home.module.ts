import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleComponent } from './middle/middle.component';

// import { AuthModule } from

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MiddleComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
   
  ]
})
export class HomeModule { }
