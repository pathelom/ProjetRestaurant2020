import { Injectable } from '@angular/core';
import {Plat} from '../models/plat';
import {HttpClient} from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})

export class PlatsService {
  
  url = "http://127.0.0.1:1337/";


  constructor(private backend:HttpClient) { }

  getPlat(){
    return this.backend.get<Plat[]>('url');
  }
  postPlat(p:any){
    return this.backend.post(this.url+"plats",p,{headers:{'Content-Type':'Application/json'},params:{'token':localStorage.getItem('token')}});
  }
  getPlatById(id:number){
    return this.backend.get(this.url+'plats/'+id);
  }
  updatePlat(id:number,p:any){
    return this.backend.put(this.url+'plats/'+id,p,{params:{'token':localStorage.getItem('token')}});
  }
  deletePlat(p:number){
    return this.backend.delete(this.url+'plats/'+p,{params:{'token':localStorage.getItem('token')}});
  }
  getRestaurant(id:number){
    return this.backend.get(this.url+"restaurants/"+id);
  }
  getRestaurants(){
    return this.backend.get(this.url+"restaurants/",{headers:{'Content-Type':'Application/json'}}).toPromise();
  }

  getPlatofRestaurant(id:number){
    return this.backend.get(this.url+"restaurants/"+id,{headers:{'Content-Type':'Application/json'}}).toPromise();
  }

}
