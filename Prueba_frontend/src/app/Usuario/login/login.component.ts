import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../Modelo/Usuario';
import { ServiceService } from '../../Service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service: ServiceService,private toastr: ToastrService) {}
  loading = false;
  usuario: Usuario = new Usuario();
  ngOnInit()   {
  }
  login() {
    //Comprobar que existe un usario con ese nombre y esa contraseña
    //Si existe
    this.service.usuarioLogin(this.usuario)
    .subscribe(data => {
      console.log(data);
      if(data){
        localStorage.setItem('usuario', this.usuario.usuario);
        this.router.navigate(['home']);
      }else{
        this.toastr.error('El usuario no es correcto','Error');
      }
    }, error=>{
    //Si no existe
    this.toastr.error('El usuario no es correcto','Error');
    });
  }
agregar() {
  this.loading = true
  this.router.navigate(["add"]);
}
}
