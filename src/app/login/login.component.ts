import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
        this.router.navigate(["/home/main"]);

      });
    }
    
    else{
      this.valid=true;
    }
  }

}
