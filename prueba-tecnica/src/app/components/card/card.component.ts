import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input() items: any[] = []
  @Input() pageActual: number= 1;

  constructor() { }


}
