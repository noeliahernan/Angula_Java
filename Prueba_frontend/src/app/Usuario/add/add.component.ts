import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  loading = false;
  usuario: Usuario = new Usuario();
  constructor(private router: Router, private service: ServiceService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  guardar() {
    this.loading = true;
    this.service.createUsuario(this.usuario)
    .subscribe(data=> {
      this.loading = false;
      this.toastr.success('El usuario se agrego correctamente');
      this.router.navigate(['listar']);
    }, error => {
      this.loading = false;
      this.toastr.error('Se ha producido un error realizando la operación','Error');
    });
  }

}
