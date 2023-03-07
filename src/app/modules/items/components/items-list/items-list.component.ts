import { Component, OnDestroy, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Item } from '@app/shared';
import { ItemsListService } from '../../services/items-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit, OnDestroy {

  items: Item[] = [];
  _items: Subscription

  constructor(private itemsListService: ItemsListService) { }

  ngOnInit() {
    this._items = this.itemsListService.LastItemsBatch.subscribe(items => {
      this.items.push(...items)
    })
    const _itemSub = this.itemsListService.LastFilteredItems.subscribe(filteredItems => {
      this.items = filteredItems
    })
    this.itemsListService.loadItemsBatch()
    this._items.add(_itemSub)
  }

  async onIonInfinite(ev: Event) {
    (ev as InfiniteScrollCustomEvent).target.complete()
    this.itemsListService.loadItemsBatch()
  }

  ngOnDestroy() {
    this.itemsListService.filterItems('')
    this._items.unsubscribe()
  }
}
