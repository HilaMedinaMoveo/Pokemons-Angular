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
  item: Icard[] = [];
  array: any;
  
  constructor(private apiTaskService :ApiService){ }
  page: number = 1
  PokemonsData!: Icard[]; 
  // PokemonsData!: IPokemonsData[]
  
  ngOnInit(): void{ 
    // this.apiTaskService.getPokemons().subscribe((data:Object) =>{
    this.apiTaskService.getPokemons().subscribe((data:any) =>{
    this.PokemonsData = data.results
      console.log( this.PokemonsData)
    const array = this.PokemonsData.forEach((item) => {
      this.item.getPokemonsPhoto().subscribe(item.url)
    console.log(item)
    })
    // console.log(array)
    // this.array.forEach((photo:any) => {photo.url.get(photo.url)
    // console.log(photo.url)})
    // })
       this.array.forEach((photo:any) => 
       console.log(photo.url))
    })
  }
  showMoreDetails() {
    console.log("showMoreDatails1")
  }
  
}





