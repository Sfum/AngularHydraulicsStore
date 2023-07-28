import { Component } from '@angular/core';
import {ManufacturerService} from "../../services/manufacturer.service";
import {ProductService} from "../../services/product.service";
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";
import {Category} from "../../models/category";
import {Manufacturer} from "../../models/manufacturer";

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.sass']
})
export class ProductFilterComponent {

  constructor(private manufacturerService: ManufacturerService,
              private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) { }

  selectedCategory: Category | undefined;
  selectedManufacturer: Manufacturer | undefined;


  manufacturerFilterItems(manufacturer: Manufacturer) {
    this.productService.manufacturerFilter(manufacturer)
    this.router.navigate(['']);
  }

  categoryFilterItems(category: Category) {
    this.productService.categoryFilter(category)
    this.router.navigate(['']);
  }
}
