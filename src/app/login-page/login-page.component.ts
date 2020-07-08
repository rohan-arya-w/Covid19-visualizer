import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, Validators} from '@angular/forms';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginDetails:any;
  valid=false;

  constructor(private authorization:AuthorizationService, private fb:FormBuilder, private router:Router) { 
    this.loginDetails=this.fb.group({
      email:this.fb.control("",[Validators.required,Validators.email]),
      password:this.fb.control("",[Validators.required])
    })
  }
  ngOnInit(): void {
  }
  login(){
    if(this.loginDetails.valid){
      
      this.authorization.login(this.loginDetails.value).subscribe(
        data=>{
          
        this.authorization.storeToken(data.token);
        this.router.navigate(["/home"]);

      },
        
      );
    }else{
      this.valid=true;
    }
  }

}
//yeahhhhhhhhhhhh
