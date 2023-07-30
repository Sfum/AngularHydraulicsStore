import { Injectable } from '@angular/core';
import {tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Faq} from "../models/faq";

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  MOCK_URL = 'assets/json/faq-data.json';

  faq$ = this.httpClient
    .get<Faq[]>(this.MOCK_URL)
    .pipe(tap((data) => console.log('Faq: ', JSON.stringify)));

  constructor(private httpClient: HttpClient) {
  }
}
