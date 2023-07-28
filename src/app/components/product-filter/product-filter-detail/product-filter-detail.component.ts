import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../../models/category";
import {Manufacturer} from "../../../models/manufacturer";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-product-filter-detail',
  templateUrl: './product-filter-detail.component.html',
  styleUrls: ['./product-filter-detail.component.sass']
})
export class ProductFilterDetailComponent {
  @Input() category!: Category | undefined;
  @Input() manufacturer!: Manufacturer | undefined;

  @Output() onFilterManufacturerChange: EventEmitter<Manufacturer> = new EventEmitter<Manufacturer>()
  @Output() onFilterCategoryChange: EventEmitter<Category> = new EventEmitter<Category>()

  constructor(private productService: ProductService) {
  }
  manufacturer$ = this.productService.manufacturers$
  category$ = this.productService.categories$

  manufacturerFilterItems(manufacturer: Manufacturer) {
    return this.onFilterManufacturerChange.emit(manufacturer)
  }

  categoryFilterItems(category: Category) {
    return this.onFilterCategoryChange.emit(category)

  }
}
