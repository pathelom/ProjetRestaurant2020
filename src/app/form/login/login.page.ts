import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';
import { Router } from '@angular/router';
import { IncludeService } from 'src/app/Services/include.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;
  constructor(private fb:FormBuilder,private service:UsersService,private route:Router,private utils:IncludeService) {
    this.loginForm = this.fb.group({
      identifier:['',Validators.required],
      password:['',Validators.required]
    });
   }

  ngOnInit() {
  }
  login(){
    this.service.login(this.loginForm.value).subscribe(data=>{
      this.service.isAuth = true;
      window.localStorage.setItem('token',data.jwt);
      this.route.navigateByUrl(this.service.redirectUrl);
    },error=>{
      this.utils.presentToast("Nom d'utilisateur ou mot de passe incorect",'danger');
    });
  }

}
