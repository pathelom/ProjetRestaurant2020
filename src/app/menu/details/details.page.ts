import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatsService } from 'src/app/Services/plats.service';
import { Restaurant } from 'src/app/models/restaurant';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  restaurant:Promise<any>;
  rest:Restaurant={};
  name:string ='';
  zoom:15;
  constructor(private route:ActivatedRoute,private services:PlatsService) {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.restaurant =  this.services.getRestaurant(id).toPromise();
    this.restaurant.then((d:any)=>{
      this.name = d.Name;
      this.rest = d;
      console.log(this.rest);
    });
   }

  ngOnInit() {
    
  }

}
