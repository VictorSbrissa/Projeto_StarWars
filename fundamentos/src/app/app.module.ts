import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppOutingModule } from './app-outing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatSnackBarModule } from '@angular/material/snack-bar'
import { BarrapesquisaComponent } from './barrapesquisa/barrapesquisa.component';
import { FormsModule } from '@angular/forms';
import { CarrocelComponent } from './carrocel/carrocel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BarrapesquisaComponent,
    CarrocelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppOutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
