import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {
  platId : number;
  constructor(
    private route : ActivatedRoute
  ) {
   
    this.platId = Number(this.route.snapshot.paramMap.get('id'));
    console.log("Id="+this.platId);
  }

  

  ngOnInit() {
  }

}
