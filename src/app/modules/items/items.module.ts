import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslatePipe } from '@app/shared';
import { IonicModule } from '@ionic/angular';
import { ItemsFilterComponent } from './components/items-filter/items-filter.component';
import { ItemComponent } from './components/item/item.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemsListService } from './services/items-list.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TranslatePipe
  ],
  exports: [
    ItemsListComponent,
    ItemsFilterComponent
  ],
  declarations: [
    ItemsListComponent,
    ItemsFilterComponent,
    ItemComponent
  ],
  providers: [
    ItemsListService
  ]
})
export class ListItemsModule { }
