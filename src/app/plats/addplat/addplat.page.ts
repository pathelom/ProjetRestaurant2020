import { Component, OnInit } from '@angular/core';
import {Plat} from '../../models/plat'
import {PlatsService} from '../../Services/plats.service'
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { IncludeService } from 'src/app/Services/include.service';
import { Router } from '@angular/router';
//import { Plat } from 'src-with-webservice/app/Models/plat';

@Component({
  selector: 'app-addplat',
  templateUrl: './addplat.page.html',
  styleUrls: ['./addplat.page.scss'],
})
export class AddplatPage implements OnInit {
  addPlat:FormGroup;
  restaurants:[];

  constructor(private route:Router, private service:PlatsService,private fb:FormBuilder,private utils:IncludeService) { 
    this.addPlat = fb.group({
      Name:['',Validators.required],
      prix:['',Validators.required],
      Description:['',Validators.required],
      restaurant:['',Validators.required]
    })
  }

  ngOnInit() {
  this.service.getRestaurants().then((data:[])=>{
      this.restaurants=data;
    })
  }

  formSubmit(){
    this.addPlat.value.restaurant = this.restaurants.find((d:any)=>d.id==this.addPlat.value.restaurant);
    this.service.postPlat(this.addPlat.value).subscribe((data)=>{
      this.utils.presentToast("plat ajoute avec succes","success");
      this.addPlat.reset();
      this.route.navigate(['tabs/plats/']);

    });
  }

}
