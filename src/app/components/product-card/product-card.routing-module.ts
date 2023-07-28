import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {ProductCardComponent} from "./product-card.component";

const childRoutes: Routes = [
  {path: 'products', component: ProductCardComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(childRoutes)]
  ]
})
export class ProductCardRoutingModule {
}
