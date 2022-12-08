import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import{Icard} from '../../models/card.interface'


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  // cards: Icard[] = [];
  cards: any;

  constructor(private apiTaskService:ApiService){ }
  page: number = 1
  
  PokemonsData!: Icard[];

ngOnInit(): void{ 
    this.apiTaskService.getPokemons().subscribe((data:any) =>{
      this.PokemonsData = data.results
      const array = this.PokemonsData.forEach((item) =>
      console.log(item.name,item.url))
    })
  }
}
 



