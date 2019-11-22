import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Ejemplo';
  loading = false;

  constructor(private router:Router){}

  ngOnInit() {
  }

  listar(){
    this.loading=true;
    this.router.navigate(["listar"]);
  }
  agregar(){
    this.loading = true
    this.router.navigate(["add"]);
  }
  salir(){
    this.loading=true;
    localStorage.clear();
    this.router.navigate(["login"]);
  }
  isLogged() {
    return localStorage.getItem('usuario') != null;
  }
}
