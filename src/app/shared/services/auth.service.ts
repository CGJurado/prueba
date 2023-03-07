import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = new BehaviorSubject(false)
  private username = new BehaviorSubject('')

  constructor(private navCtrl: NavController) { }

  get IsAuth(): Observable<boolean> { return this.isAuth.asObservable() }
  get Username(): Observable<string> { return this.username.asObservable() }

  validateUser(): Promise<boolean> {
    return new Promise(resolve => {
      const username = this.getUsername()
      if(username) {
        this.username.next(username)
        this.isAuth.next(true)
      }
      resolve(this.isAuth.value)
    })
  }

  login(email: string, password: string, remember: boolean = false): Promise<boolean> {
    return new Promise(resolve => {
      if (email && password) {
        this.username.next(email)
      }
      if (remember) {
        localStorage.setItem("username", email)
      }
      this.isAuth.next(true)
      resolve(true)
    })
  }

  logOut() {
    localStorage.clear()
    this.isAuth.next(false)
    this.navCtrl.navigateRoot('login')
  }

  getUsername(): string | null {
    return localStorage.getItem("username")
  }
}
