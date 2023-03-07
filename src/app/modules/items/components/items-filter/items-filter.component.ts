import { Component } from '@angular/core';
import { ItemsListService } from '../../services/items-list.service';

@Component({
  selector: 'app-items-filter',
  templateUrl: './items-filter.component.html',
  styleUrls: ['./items-filter.component.scss'],
})
export class ItemsFilterComponent {

  constructor(private itemsListService: ItemsListService) { }

  onInput(event: any) {
    const value = event.target!.value;
    this.itemsListService.filterItems(value)
  }

}
