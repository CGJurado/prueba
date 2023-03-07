import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListItemsModule } from 'src/app/modules/items/items.module';
import { UserModule } from 'src/app/modules/user/user.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ListItemsModule,
    UserModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
