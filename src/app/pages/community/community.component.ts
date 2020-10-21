import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  numeros = ['1', '2', '3', '4', '5'];
  tittle = "Community";
  constructor() { }

  ngOnInit() {
  }

}
