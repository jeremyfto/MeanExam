import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  constructor(private http: HttpService, private route: ActivatedRoute) { }
  Pet: Object
  Likes: Number
  x: String
  IsLiked: Boolean
  ngOnInit() {
    // console.log(this.route.params["_value"]["id"])
    this.GetPet()
    
  }
  SetPubParams(){
    this.x = this.route.params["_value"]["id"]
  }
  GetPet(){
    this.http.viewPet(this.route.params["_value"]["id"]).subscribe(data => {
      this.Pet = data["pet"]
      this.Likes = data["pet"]["likes"]
      this.IsLiked = false
      console.log(this.Pet)})
  }
  LikePet(PetId){
    console.log(PetId)
    this.http.upvotePet(PetId).subscribe(data => {
      this.Likes = data["pet"]["likes"]
      this.IsLiked = true})
  }
  DontLikePet(){
    console.log("You have already liked this pet")
  }
  DelPet(Pet){
    this.http.deletePet(Pet).subscribe(data => {
      console.log(data)
      window.location.href = ""})
  }
}
