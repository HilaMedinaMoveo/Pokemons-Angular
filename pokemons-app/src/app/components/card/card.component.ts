import { Component, Input, OnInit } from '@angular/core';
import {Icard} from "../../models/card.interface"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  
@Input() cards!: Array<Icard>

ngOnInit(): void {  
}
}
