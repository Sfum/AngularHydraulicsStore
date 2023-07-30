import {Injectable} from '@angular/core';
import {Product} from "../models/product";
import {BehaviorSubject, combineLatest, map, Observable, shareReplay, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ManufacturerService} from "./manufacturer.service";
import {CategoryService} from "./category.service";
import {ModelService} from "./model.service";
import {Manufacturer} from "../models/manufacturer";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  MOCK_URL = 'assets/json/product-data.json';

  products$ = this.httpClient
    .get<Product[]>(this.MOCK_URL)
    .pipe(tap((data) => console.log('Product: ', JSON.stringify)));

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');


  manufacturers$ = this.manufacturerService.manufacturers$
  categories$ = this.categoryService.categories$
  models$ = this.modelService.models$

  constructor(private httpClient: HttpClient,
              private manufacturerService: ManufacturerService,
              private categoryService: CategoryService,
              private modelService: ModelService) {
  }

  manufacturerFilter(manufacturer: Manufacturer) {
    this.categorySelectedSubject.next(0);
    this.manufacturerSelectedSubject.next(0);
    this.manufacturerSelectedSubject.next(+manufacturer);
  }

  categoryFilter(category: Category) {
    this.manufacturerSelectedSubject.next(0);
    this.categorySelectedSubject.next(0);
    this.categorySelectedSubject.next(+category);
  }

  public categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySubject$ = this.categorySelectedSubject.asObservable();

  public manufacturerSelectedSubject = new BehaviorSubject<number>(0);
  manufacturerSubject$ = this.manufacturerSelectedSubject.asObservable();

  categoryStream$ = combineLatest([
    this.products$,
    this.categorySubject$,
  ]).pipe(
    map(([products, category]) =>
      products.filter((product) =>
        category ? product.categoryId == category: true
      )
    ));

  manufacturerStream$ = combineLatest([
    this.categoryStream$,
    this.manufacturerSubject$,
  ]).pipe(
    map(([products, manufacturer]) =>
      products.filter((product) =>
        manufacturer ? product.manufacturerId == manufacturer : true
      )
    ));

  productStreamFiltered$ = combineLatest([
    this.manufacturerStream$,
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

  filteredProductsFetch$ = combineLatest([
    this.productStreamFiltered$,
    this.manufacturers$,
    this.categories$,
    this.models$,
  ]).pipe(
    map(([products, manufacturers, categories, models]) => ({
        products,
        manufacturers,
        categories,
        models
      })
    )
  )
  GetProducts() {
    return this.httpClient.get(`${this.MOCK_URL}`);
  }
  GetProduct(id: any): Observable<any> {
    let API_URL = `${this.MOCK_URL}/product/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      })
    );
  }
}
