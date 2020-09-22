import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';
import { IncludeService } from 'src/app/Services/include.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister:FormGroup;
  constructor(private fb:FormBuilder,private user_services:UsersService,private utils:IncludeService) { 
    this.formRegister=this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.minLength(6)]
    });
  }

  ngOnInit() {
  }
  register(){
    this.user_services.register(this.formRegister.value).subscribe((data)=>{
      this.utils.presentToast("Compte cree avec succes","primary");
      this.formRegister.reset();
    });
    
  }

}
