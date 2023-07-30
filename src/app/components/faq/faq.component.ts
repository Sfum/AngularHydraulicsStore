import { Component } from '@angular/core';
import {FaqService} from "../../services/faq.service";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent {

  constructor(private faqService: FaqService){
  }

  faqFetched$ = this.faqService.faq$;
}
