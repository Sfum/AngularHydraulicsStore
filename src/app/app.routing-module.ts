import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CategoryComponent} from "./components/category/category.component";
import {ProductCardRoutingModule} from "./components/product-card/product-card.routing-module";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    loadChildren: () => import('./components/product-card/product-card.module').then(x => x.ProductCardModule)
  },
  {path: 'category', component: CategoryComponent},

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
