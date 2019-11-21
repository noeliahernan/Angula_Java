import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Usuario } from 'src/app/Modelo/Usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  loading = false;
  usuarios: Usuario[];
  constructor(private service: ServiceService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getUsuarios()
      .subscribe(data => {
        this.usuarios = data;
      });
  }
  editar(usuario: Usuario):void{
    this.loading = true;
    localStorage.setItem("id",usuario.id.toString());
    this.router.navigate(["edit"]);
  }

  delete(usuario: Usuario) {
    this.loading = true;
    this.service.deleteUsuario(usuario)
    .subscribe(data => {
      this.usuarios= this.usuarios.filter(u=>u!==usuario);
      this.loading = false;
      this.toastr.success('El usuario se ha eliminado correctamente');
    },
    error => {
      this.loading = false;
      this.toastr.error('Se ha producido un error realizando la operación','Error');
    });
  }

}
