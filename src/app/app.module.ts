import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProductCardDetailComponent} from './components/product-card/product-card-detail/product-card-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "./app.routing-module";
import {ProductCardModule} from "./components/product-card/product-card.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink, RouterOutlet} from "@angular/router";
import { HeaderComponent } from './shared/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductCardDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    ProductCardModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonToggleModule,
    RouterLink,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
