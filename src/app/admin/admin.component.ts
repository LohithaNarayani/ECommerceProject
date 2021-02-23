import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {IAdmin} from 'src/app/IUser.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isDisabled:boolean= true;
  msgTrue:boolean=true;
  adminData=<IAdmin>{};
  adminlist:IAdmin[]=[];
  emailid="";

  

  constructor(private router:Router,private adminservice:AdminService) { }

  ngOnInit(): void {
    this.adminservice.getData().subscribe(data =>{
      this.adminlist=data;
    });
  }

  adminSubmit(adminForm:NgForm){
    console.log(adminForm);
    for(let k in this.adminlist)
    {
      if(adminForm.value.emailid == this.adminlist[k].emailid && adminForm.value.password == this.adminlist[k].password)
      {
        alert("Welcome"  + "\n" + "Login is Successfull!!!!");
        this.msgTrue=false;
        this.isDisabled =!this.isDisabled;
        console.log('entered admin login');
        this.router.navigateByUrl('/admincreate');
        //break;
      }
      
    }
    if(this.msgTrue){
      alert("Login Failed");
    }
  }
}
