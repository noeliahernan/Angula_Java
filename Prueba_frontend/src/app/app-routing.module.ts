import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Usuario/listar/listar.component';
import { AddComponent } from './Usuario/add/add.component';
import { EditComponent } from './Usuario/edit/edit.component';
import { LoginComponent } from './Usuario/login/login.component';
import { HomeComponent } from './Usuario/home/home.component';

const routes: Routes = [
  {path:'', component: (() => {
    return localStorage.getItem('usuario') ? HomeComponent : LoginComponent;
  })()},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'listar', component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
