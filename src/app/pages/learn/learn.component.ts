import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  modal:boolean;
  cards:boolean = true;
  numeros = ['1', '2', '3', '4', '5'];
  tittle = "Learn";
  constructor() { }

  ngOnInit() {
  }
  toggle_cards():void {
    this.cards = !this.cards;
  }
  toggle_modal():void {
    this.modal = !this.modal; 
  }
}
