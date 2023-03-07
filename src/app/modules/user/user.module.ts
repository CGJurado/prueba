import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@app/shared';
import { IonicModule } from '@ionic/angular';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { UserToolbarComponent } from './components/user-toolbar/user-toolbar.component';
import { UsersOnlyDirective } from './directives/users-only.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslatePipe
  ],
  exports: [
    AuthFormComponent,
    UserToolbarComponent,
    UsersOnlyDirective
  ],
  declarations: [
    AuthFormComponent,
    UserToolbarComponent,
    UsersOnlyDirective
  ],
  providers: [],
})
export class UserModule { }
