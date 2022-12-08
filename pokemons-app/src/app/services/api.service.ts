import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {   
  }
  getPokemons(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100/")
  }
}
