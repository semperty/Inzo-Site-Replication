import { Component } from '@angular/core';
import { MerchItemModel } from './merch-item.model';
import { merch_list } from './merch-list';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent {
  items: MerchItemModel [] = [];

  constructor() {
    for(var item of merch_list) {
      this.items.push(item)
    }
  }
}
