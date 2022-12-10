import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import{ Icard, IgetPokemonsResponse, IPokemon,  } from '../../models/card.interface'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  title:string = "Pokemons cards";
  item?: IPokemon 
  array: any;
  
  constructor(private apiTaskService :ApiService){ }
  page: number = 1
  pokemonsData!: Icard[]; 
  pokemons: IPokemon[]  = [];
  next?: string

paginate(): void{  
  this.apiTaskService.getPokemons().subscribe((data:IgetPokemonsResponse) =>{
    this.pokemonsData = data.results
    this.next = data.next
     this.pokemonsData.forEach((item) => {
      this.apiTaskService.getPokemonDetails(item.url).subscribe(pokemon=>{
       this.pokemons.push(pokemon) 
      })
     }) 
    })
}

  ngOnInit(): void{ 
    this.paginate()
  }
  showMoreDetails() {
    console.log("showMoreDatails1")
  }
  
}





