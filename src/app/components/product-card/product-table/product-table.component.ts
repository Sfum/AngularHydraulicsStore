import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.sass']
})
export class ProductTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'product_image',
    'product_name',
    'price',
    'categoryId',
    'manufacturerId'
  ];
  dataSource: any;
  products: Product[] = [];

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private productService: ProductService,
  ) {
    this.dataSource = new MatTableDataSource<Product>();
  }

  ngAfterViewInit() {
    this.loadProducts();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadProducts() {
    this.productService.productStreamFiltered$.subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
