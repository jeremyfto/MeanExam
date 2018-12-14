import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../pet';

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {

  constructor(private http: HttpService, private route: ActivatedRoute) { }
  EditPet: Object;
  Errors: String;
  Skill1: String;
  Skill2: String;
  Skill3: String;
  ngOnInit() {
    this.GetPet()
  }
  GetPet(){
    this.http.viewPet(this.route.params["_value"]["id"]).subscribe(data => {
      this.EditPet = data["pet"]
      this.Skill1 = data["pet"]["skills"]["skill1"]
      this.Skill2 = data["pet"]["skills"]["skill2"]
      this.Skill3 = data["pet"]["skills"]["skill3"]
    })
  }
  SavePet(){
    this.EditPet["skills"]["skill1"] = this.Skill1
    this.EditPet["skills"]["skill2"] = this.Skill2
    this.EditPet["skills"]["skill3"] = this.Skill3
    this.http.editPet(this.EditPet['_id'], this.EditPet).subscribe(data => {
      if(data['UErr']){
        this.Errors = data['UErr']
      }
      else if(data['err']){
        this.Errors = data['err']['errors']['type']['message']
        console.log(data['err']['errors'])
      }
      // else if(!data['name']){
      //   this.Errors = "Pet Name is required"
      // }
      // else if(!data['name']){
      //   this.Errors = "Pet Name is required"
      // }
      // else if(!data['name']){
      //   this.Errors = "Pet Name is required"
      // }
      else{
        window.location.href = "/"
      }
    })
    console.log("posting")
  }
}
