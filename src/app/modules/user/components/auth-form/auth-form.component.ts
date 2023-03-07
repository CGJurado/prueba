import { Component, ContentChild, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/shared';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {

  authForm: FormGroup
  formSubmited: boolean = false
  @Output() userAuthenticatedEvent = new EventEmitter<boolean>()
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.authForm = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(5), Validators.required])],
      rememberMe: [false]
    })
  }

  onSubmit() {
    this.formSubmited = true
    if (this.authForm.valid) {
      const {email, password, rememberMe} = this.authForm.value
      this.authService.login(email, password, rememberMe).then(isAuth => this.userAuthenticatedEvent.emit(isAuth))
    }
  }

}
