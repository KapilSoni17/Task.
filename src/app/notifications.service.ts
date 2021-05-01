import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private toastr: ToastrService,private toastrr:ToastrService) {}

 
  success(msg: string  | undefined,ttl: string  | undefined){
    this.toastrr.success(msg,ttl)
  }
 
  
}
