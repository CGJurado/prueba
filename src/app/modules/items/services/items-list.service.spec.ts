import { TestBed } from '@angular/core/testing';

import { ItemsListService } from './items-list.service';

describe('ItemService', () => {
  let service: ItemsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
