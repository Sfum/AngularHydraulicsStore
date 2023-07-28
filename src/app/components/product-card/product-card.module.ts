import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {MatCardModule} from "@angular/material/card";

import {ProductCardRoutingModule} from "./product-card.routing-module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import { ProductTableComponent } from './product-table/product-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    ProductCardRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSortModule
  ],
  exports: [
    ProductTableComponent

  ],
  declarations: [


    ProductTableComponent
  ]
})
export class ProductCardModule {
}
