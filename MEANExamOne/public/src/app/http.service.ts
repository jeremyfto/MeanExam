import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getPets(){
    return this.http.get('/pets')
  }
  viewPet(PetID){
    return this.http.get('/pets/'+PetID)
  }
  createPet(Pet){
    return this.http.post('/pets', Pet)
  }
  editPet(PId, Pet){
    return this.http.post('/pets/edit/'+PId, Pet)
  }
  deletePet(Pet){
    return this.http.get('/pets/delete/'+Pet)
  }
  upvotePet(Pet){
    return this.http.patch('/pets/u/'+Pet, Pet)
  }
  downvotePet(Pet){
    return this.http.patch('/pets/d/'+Pet["_id"], Pet)
  }
}
