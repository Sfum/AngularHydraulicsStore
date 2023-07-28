import {Component, Input} from '@angular/core';
import {Category} from "../../../models/category";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.sass']
})
export class CategoryDetailComponent {
  @Input()
  category!: Category

}
