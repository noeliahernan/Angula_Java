import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Usuario/listar/listar.component';
import { AddComponent } from './Usuario/add/add.component';
import { EditComponent } from './Usuario/edit/edit.component';
import { LoginComponent } from './Usuario/login/login.component';
import{FormsModule}from '@angular/forms';
import{ServiceService}from '../app/Service/service.service';
import{HttpClientModule}from '@angular/common/http';
import { HomeComponent } from './Usuario/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule, ngxLoadingAnimationTypes  } from 'ngx-loading';
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxLoadingModule.forRoot({})
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
