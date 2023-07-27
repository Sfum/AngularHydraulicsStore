import { Injectable } from '@angular/core';
import {Manufacturer} from "../models/manufacturer";
import {tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  MOCK_URL = 'assets/json/manufacturer-data.json';

  manufacturers$ = this.httpClient
    .get<Manufacturer[]>(this.MOCK_URL)
    .pipe(tap((data) => console.log('Manufacturer: ', JSON.stringify)));

  constructor(private httpClient: HttpClient) {
  }
}
