import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: 'compte.page.html',
  styleUrls: ['compte.page.scss']
})
export class Compte {

  constructor(private route:Router) {}
  login(){
    this.route.navigateByUrl('login');
  }
  register(){
    this.route.navigateByUrl('register');
  }
}
