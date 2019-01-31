import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MDBBootstrapModule, DropdownModule  } from 'angular-bootstrap-md';

import { ButtonsModule, WavesModule, CardsFreeModule, InputsModule } from 'angular-bootstrap-md';
import { LoginComponent } from './components/login/login.component';
import { AppRouting } from './app.routing';
import { PanelComponent } from './components/layout/panel/panel.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const MDB_IMPORTS = [
  ButtonsModule,
  WavesModule,
  CardsFreeModule,
  InputsModule
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    MDBBootstrapModule.forRoot(),
    ...MDB_IMPORTS,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
