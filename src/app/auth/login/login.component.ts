import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { NotificationsService } from '../../notifications.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // token = localStorage.token;
 baseURL : string = "http://daycarepanel.stage02.obdemo.com/api/v1/";
 api : string = "login";
  form: FormGroup;
  showSuccess: any;
  constructor(public router :Router,private notifyService: NotificationsService, 
    private http : HttpClient, private fb :FormBuilder) {
    this.form = this.fb.group({
    email : ['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
    })
   }

  
   ngOnInit (): void { }

  submit(){
    return this.http.post<any>(
    this.baseURL + this.api,this.form.value).subscribe(
        (res)=>{console.log(res),
        localStorage.token=res.token;
        this.router.navigate(['./home/middle'])},
        

        
      ),
      
catchError((err)=>{
  return err.error;

})

}


}
