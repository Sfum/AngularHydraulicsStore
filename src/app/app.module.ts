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
import {HeaderComponent} from './shared/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {ProductFilterComponent} from './components/product-filter/product-filter.component';
import {
  ProductFilterDetailComponent
} from './components/product-filter/product-filter-detail/product-filter-detail.component';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {ProductShellComponent} from './components/product-shell/product-shell.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryDetailComponent } from './components/category/category-detail/category-detail.component';
import {MatCardModule} from "@angular/material/card";
import { FaqComponent } from './components/faq/faq.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { FaqDetailComponent } from './components/faq/faq-detail/faq-detail.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WishlistDetailComponent } from './components/wishlist/wishlist-detail/wishlist-detail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartDetailComponent } from './components/shopping-cart/shopping-cart-detail/shopping-cart-detail.component';
import {MatBadgeModule} from "@angular/material/badge";

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductCardDetailComponent,
    HeaderComponent,
    ProductFilterComponent,
    ProductFilterDetailComponent,
    ProductShellComponent,
    CategoryComponent,
    CategoryDetailComponent,
    FaqComponent,
    FaqDetailComponent,
    WishlistComponent,
    WishlistDetailComponent,
    ShoppingCartComponent,
    ShoppingCartDetailComponent
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
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
