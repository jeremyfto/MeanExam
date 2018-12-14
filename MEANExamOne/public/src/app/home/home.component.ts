import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private http: HttpService) { }
  pets: []
  ngOnInit() {
    this.GetPets()
  }
  pizza(arr){
    var sortpets = arr.slice(0)
    sortpets.sort(function(a,b){
      var x = a.type.toLowerCase();
      var y = b.type.toLowerCase();
      return x < y ? - 1 : x > y ? 1 : 0;
    })
    return sortpets
  }
  GetPets(){
    this.http.getPets().subscribe(data=>{
      this.pets = this.pizza(data['pets'])
      })
  }
}
