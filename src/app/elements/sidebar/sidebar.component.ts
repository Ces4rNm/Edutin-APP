import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  category = ['Ingeniería', 'Escuela de idiomas', 'Ciencias básicas', 'Arquitectura, arte y diseño', 'Administración y negocios', 'Medicina y ciencias de la salud', 'Ciencias sociales y humanas', 'Escuela de educación'];
  numeros = ['1', '2', '3', '4', '5'];
  constructor() { }

  ngOnInit() {
  }
  SelectCategory() {
    console.log('click');
  }
}
