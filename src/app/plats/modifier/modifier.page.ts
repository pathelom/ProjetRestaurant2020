import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatsService } from 'src/app/Services/plats.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { IncludeService } from 'src/app/Services/include.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {
  update:FormGroup;
  plats:any;

  constructor(private route:ActivatedRoute,private services:PlatsService,private fb:FormBuilder,private utils:IncludeService) {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.plats =  this.services.getPlatById(id).subscribe((plat)=>{
      this.plats = plat;
      console.log(this.plats);
    });

    this.update = fb.group({
      Name:['',Validators.required],
      prix:['',Validators.required],
      Description:['',Validators.required],
    });
   }

  ngOnInit() {
  }

  formSubmit(){
    this.services.updatePlat(this.plats.id,this.update.value).subscribe((d)=>{
      this.utils.presentToast("Plat modifié avec succes","success");
    });

  }

}
