import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  numeros = ['1', '2', '3', '4', '5'];
  tittle = "About";
  constructor() { }

  ngOnInit() {
  }

}
