import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import{Icard} from '../models/card.interface'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {   
  }
 getPokemons(){
   return this.http.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100/")
 }
  // public getPokemons(): Observable<Array<Icard>>{
  //   const url:string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100/"
  //   return this.http.get(url,{}) as Observable<Array<Icard>>

  // }
}
