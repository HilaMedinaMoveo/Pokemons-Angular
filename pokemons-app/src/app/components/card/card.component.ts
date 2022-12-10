import { Component, Input, OnInit} from '@angular/core';
import {Icard, IPokemon} from "../../models/card.interface"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  
@Input()
item!: IPokemon;
page: number = 1

ngOnInit(): void {  
}
showMoreDetails() {
  console.log("showMoreDatails1")
}
}


