import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  loading = false;
  usuario :Usuario=new Usuario();
  constructor(private router:Router,private service:ServiceService, private toastr: ToastrService) { }

  ngOnInit() {
    this.editar();
  }

  editar(){
    this.loading = true;
    let id=localStorage.getItem("id");
    this.service.getUsuarioId(+id)
    .subscribe(data=>{
      this.usuario=data;
      this.loading=false;
    },
    error => {
      this.loading=false;
      this.toastr.error('Se ha producido un error realizando la operación','Error');
    });

  }
  actualizar(usuario:Usuario){
    this.loading = true;
    this.service.updateUsuario(usuario)
    .subscribe(data=>{
      this.usuario=data;
      this.toastr.success('El usuario se ha acutalizado correctamente');
      this.router.navigate(["listar"]);
      this.loading=false;
    },error=> {
      this.loading=false;
      this.toastr.success('Se ha producido un error realizando la operación');
    })
  }

}
