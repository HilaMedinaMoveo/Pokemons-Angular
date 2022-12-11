import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { IgetPokemonsResponse, IPokemon } from '../models/card.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {   
  }
  getPokemons(url:string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100"): Observable<IgetPokemonsResponse>{
     return this.http.get<IgetPokemonsResponse>(url)
  }
  getPokemonDetails(url: string): Observable<IPokemon>{
   return this.http.get<IPokemon>(url)

 }
}
