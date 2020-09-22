import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PlatsService } from '../Services/plats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class Menu implements OnInit {
  lat: number = 14.716677;
  lng: number = -17.450686;
  height = 0;
  zoom: number = 15;
  restaurants:[];
  constructor(private platform:Platform,private restaurantService:PlatsService,private route : Router) {
    this.height = platform.height() - 56;
  }
  ngOnInit(){
    this.restaurantService.getRestaurants().then((data:[])=>{
      this.restaurants = data;
      this.restaurants.forEach((d:any)=>{
        d.label = String(d.Name).charAt(0).toUpperCase();
      });
      console.log(this.restaurants);
    });
  }
  clickedMarker(id:number){
    this.route.navigate(['tabs/menu/restaurant/'+id]);
  }
}
