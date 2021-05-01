import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from '../../notifications.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  token = localStorage.token;


  constructor(private toastr:NotificationsService,public router :Router,private notifyService: NotificationsService) { }


  ngOnInit(): void {
    // console.log("you are in init");
    // console.log(localStorage.token);
    // const d = localStorage.token;
    // if(d==undefined){
      // if(this.token!==null){
      //   console.log(this.token);
        if(this.token==null){
          console.log(this.token);
              this.toastr.success('PLEASE LOGIN FIRST','Error');
              this.router.navigate(['auth/login']);
          }
    //   console.log('you are in if condition');
    // this.toastr.success('PLEASE LOGIN FIRST', 'ERROR');
    // this.router.navigate(['/auth/login'])

    // }
    // else{
    //   console.log('you are in else conditon');
    //   // this.toastr.success('PLEASE LOGIN FIRST', 'ERROR');
    //   // this.router.navigate(['/auth/login'])
    // }
  }



  logout(){
    // localStorage.removeItem('Token');
    // localStorage.token=undefined;
    this.toastr.success('logout', 'Successfully');
    this.router.navigate(['/auth/login']);
    localStorage.removeItem('token');

  }

  success(){
    this.toastr.success("message","title")
  }


}
