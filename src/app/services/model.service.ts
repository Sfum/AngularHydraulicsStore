import { Injectable } from '@angular/core';
import {Model} from "../models/model";
import {tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  MOCK_URL = 'assets/json/model-data.json';

  models$ = this.httpClient
    .get<Model[]>(this.MOCK_URL)
    .pipe(tap((data) => console.log('Model: ', JSON.stringify)));

  constructor(private httpClient: HttpClient) {
  }
}
