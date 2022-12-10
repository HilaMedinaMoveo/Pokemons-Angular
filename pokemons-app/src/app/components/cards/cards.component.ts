import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import{ Icard, IPokemonsData } from '../../models/card.interface'


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  title:string = "Pokemons cards";

  cards: Icard[] = [];
  // cards: any;

  constructor(private apiTaskService:ApiService){ }
  page: number = 1
  
  PokemonsData!: Icard[]; 
  // PokemonsData!: IPokemonsData[]
  
  ngOnInit(): void{ 
    // this.apiTaskService.getPokemons().subscribe((data:Object) =>{
    this.apiTaskService.getPokemons().subscribe((data:any) =>{
    this.PokemonsData = data.results
      console.log( this.PokemonsData)
      const array = this.PokemonsData.forEach((item) =>
      // const array = this.PokemonsData.results.forEach((item) =>
      console.log(item.name,item.url))
    })
  }
  showMoreDetails() {
    console.log("showMoreDatails1")
  }
  
}





