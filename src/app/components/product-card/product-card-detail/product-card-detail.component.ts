import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../models/product";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.sass']
})
export class ProductCardDetailComponent {

  constructor( private cartService: CartService) {
  }

  @Input()
  product: Product | undefined;

  @Output() onWishlistEvent: EventEmitter<Product> = new EventEmitter<Product>();

  onWishlistClicked(product: Product) {
    this.onWishlistEvent.emit(product);
  }


  onAddToCartClicked(product: Product) {
    this.cartService.addToCart(product)
  }
}
