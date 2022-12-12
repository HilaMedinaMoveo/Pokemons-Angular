import { Component, OnInit, Output, EventEmitter , Input} from '@angular/core';
import { IPokemon } from 'src/app/models/card.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{
@Output() detailsClick = new EventEmitter<any>();
@Input() item!: IPokemon;

isShowInfo: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  onClick() {
    this.detailsClick.emit();
    this.isShowInfo = !this.isShowInfo;
  }
    }
 

 


