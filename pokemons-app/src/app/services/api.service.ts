import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Icard } from '../models/card.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {   
  }
  getPokemons(): Observable<Icard>{
     return this.http.get<Icard>("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100/")
  }

}
