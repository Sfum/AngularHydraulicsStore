import {Component, Input} from '@angular/core';
import {Faq} from "../../../models/faq";

@Component({
  selector: 'app-faq-detail',
  templateUrl: './faq-detail.component.html',
  styleUrls: ['./faq-detail.component.sass']
})
export class FaqDetailComponent {

  panelOpenState = false;


  @Input() faqs: Faq | undefined;

}
