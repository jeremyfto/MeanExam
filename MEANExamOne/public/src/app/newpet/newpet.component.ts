import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Pet } from '../pet';

@Component({
  selector: 'app-newpet',
  templateUrl: './newpet.component.html',
  styleUrls: ['./newpet.component.css']
})
export class NewpetComponent implements OnInit {

  constructor(private http: HttpService) { }
  NewPet: Object;
  Errors: String;
  Skill1: String;
  Skill2: String;
  Skill3: String;
  ngOnInit() {
    this.NewPet = new Pet
  }
  PublishPet(){
    this.NewPet['skills'] = {
      "skill1": this.Skill1,
      "skill2": this.Skill2,
      "skill3": this.Skill3,
    }
    console.log(this.NewPet)
    this.http.createPet(this.NewPet).subscribe(data => {
      if(data['UErr']){
        this.Errors = data['UErr']
      }
      else if(data['err']){
        this.Errors = data['err']['errors']['name']['message']
      }
      else{
        window.location.href = ""
      }
    })
  }
}
