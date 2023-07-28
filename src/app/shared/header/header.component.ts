import { Component } from '@angular/core';
import {ManufacturerService} from "../../services/manufacturer.service";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  constructor(private manufacturerService: ManufacturerService,
              private productService: ProductService,
              private router: Router) { }

  manufacturerList$ = this.manufacturerService.manufacturers$

  onManufacturerSelect(manufacturer: any) {
    this.productService.manufacturerFilter(manufacturer + 1)
    this.router.navigate(['']);
  }

}
