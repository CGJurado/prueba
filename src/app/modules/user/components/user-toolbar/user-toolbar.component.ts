import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shared';

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.scss'],
})
export class UserToolbarComponent implements OnInit {

  username: string

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.Username.subscribe(username => this.username = username)
  }

  logOut() {
    this.authService.logOut()
  }

}
