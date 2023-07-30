import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CategoryComponent} from "./components/category/category.component";
import {ProductCardRoutingModule} from "./components/product-card/product-card.routing-module";
import {FaqComponent} from "./components/faq/faq.component";
import {WishlistComponent} from "./components/wishlist/wishlist.component";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    loadChildren: () => import('./components/product-card/product-card.module').then(x => x.ProductCardModule)
  },
  {path: 'category', component: CategoryComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
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
