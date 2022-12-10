import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{

@Output() detailsClick = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {}

  onClick() {
    this.detailsClick.emit();
  }
 
}

