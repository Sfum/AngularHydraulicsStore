import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductCardRoutingModule} from "./components/product-card/product-card.routing-module";

const routes: Routes = [
  // {path: '', pathMatch: 'full', component: },
  {
    path: 'products',
    loadChildren: () => import('./components/product-card/product-card.module').then(x => x.ProductCardModule)
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes), ProductCardRoutingModule]
  ]
})
export class AppRoutingModule {
}
