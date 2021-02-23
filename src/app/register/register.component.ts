import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {IUsers} from 'src/app/IUser.model';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regData=<IUsers>{};
  msgTrue=false;

  constructor(private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
  }

  registerSubmit(registerForm:NgForm){
    //storing registration data...
    
    console.log(registerForm.value.username);
    console.log(registerForm.value.email);
    console.log(registerForm.value.pass);

    const newuser:any= {username:registerForm.value.username,email:registerForm.value.email, pass:registerForm.value.pass};
    this.userservice.postRegData(newuser).subscribe(data =>{
      console.log(registerForm);
      this.msgTrue=true;
    });
  }

}
