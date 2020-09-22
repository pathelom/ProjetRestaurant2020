import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PlatsService } from '../Services/plats.service';
import { IncludeService } from '../Services/include.service';

@Component({
  selector: 'app-plats',
  templateUrl: 'plats.page.html',
  styleUrls: ['plats.page.scss']
})
export class Plats implements OnInit {
  restaurants=[];
  constructor(private router:Router,private services:PlatsService,private utils:IncludeService) {}

  ngOnInit(){
    this.services.getRestaurants().then((data:any)=>{
      this.restaurants = data;
    });
  }

  update(id:number){
    this.router.navigate(['tabs/plats/modifier/'+id])
  }
  deletePlat(id:number){
    this.services.deletePlat(id).subscribe((data)=>{
      this.utils.presentToast('plat supprime','danger');
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    
  }
  
}
