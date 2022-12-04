import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewNewsComponent } from './view-news/view-news.component';
const myRoute:Routes=[
  {
    path:"",
    component:AddNewsComponent

  },
  {
    path:"view",
    component:ViewNewsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddNewsComponent,
    NavbarComponent,
    ViewNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
