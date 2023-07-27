import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {combineLatest, map, shareReplay, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ManufacturerService} from "./manufacturer.service";
import {CategoryService} from "./category.service";
import {ModelService} from "./model.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  manufacturers$ = this.manufacturerService.manufacturers$
  categories$ = this.categoryService.categories$
  models$ = this.modelService.models$

  constructor(private httpClient: HttpClient,
              private manufacturerService: ManufacturerService,
              private categoryService: CategoryService,
              private modelService: ModelService) {
  }

  MOCK_URL = 'assets/json/product-data.json';

  products$ = this.httpClient
    .get<Product[]>(this.MOCK_URL)
    .pipe(tap((data) => console.log('Product: ', JSON.stringify)));

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  productStreamFiltered$ = combineLatest([
    this.products$,
    this.manufacturers$,
    this.categories$,
    this.models$
  ]).pipe(
    map(([products, manufacturers, categories, models]) =>
      products.map(
        (product) => ({
          ...product,
          manufacturerId: manufacturers.find((c) => product.manufacturerId === c.id)?.[
            "manufacturer_name"
            ],
          categoryId: categories.find((c) => product.categoryId === c.id)?.[
            "category_name"
            ],
          modelId: models.find((c) => product.modelId === c.id)?.[
            "model_name"
            ],
        } as unknown as Product))
    ),
    shareReplay(1)
  );


}
