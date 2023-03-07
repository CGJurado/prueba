import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Item, ItemsData } from '@app/shared';
import { environment } from 'src/environments/environment';

const DATA_SIZE = environment.dataSize;
const PAGE_SIZE = environment.pageSize;

@Injectable()
export class ItemsListService {

  private page = 0 // Page represents the index of each batch of Items
  private data = new ItemsData(DATA_SIZE, PAGE_SIZE)
  private lastItemsBatch = new Subject<Item[]>()
  private lastFilteredItems = new Subject<Item[]>()
  
  constructor() { }

  get LastItemsBatch(): Observable<Item[]> { return this.lastItemsBatch.asObservable() }
  get LastFilteredItems(): Observable<Item[]> { return this.lastFilteredItems.asObservable() }

  async loadItemsBatch() {
    const items = await this.getItemsBatch()
    this.lastItemsBatch.next(items)
  }

  private getItemsBatch(): Promise<Item[]> {
    return this.data.getItems(this.page++)
  }

  async filterItems(value: string) {
    const items = await this.getFilteredItems(value)
    this.lastFilteredItems.next(items)
  }

  private getFilteredItems(value: string): Promise<Item[]> {
    return this.data.getFilteredItems(this.page = 0, value)
  }

}
