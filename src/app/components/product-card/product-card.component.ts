import { Component } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {WishlistService} from "../../services/wishlist.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent {
  constructor(private productService: ProductService,
              private wishlistService: WishlistService) { }

  productStream$ = this.productService.productStreamFiltered$
  selectedComponent: any;

  onAddToWishlistClick(product: Product) {
    this.wishlistService.addToWishlist(product);

  }
}
