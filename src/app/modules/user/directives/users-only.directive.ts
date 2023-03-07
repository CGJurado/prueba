import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '@app/shared';

@Directive({
  selector: '[appUsersOnly]'
})
export class UsersOnlyDirective implements OnDestroy {

  private _isAuth: Subscription

  constructor(private element: ElementRef, private authService: AuthService) {
    this._isAuth = this.authService.IsAuth.subscribe(isAuth => {
      if (isAuth) {
        this.element.nativeElement.style.visibility = 'inherits'
      } else {
        this.element.nativeElement.style.visibility = 'hidden'
      }
    })
  }

  ngOnDestroy(): void {
    this._isAuth.unsubscribe()
  }

}
