import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AuthFacade } from '../state/auth.facade';

@Component({
  imports: [FormsModule],
  selector: 'app-auth',
  styleUrl: './auth.css',
  templateUrl: './auth.html',
})
export class Auth {
  private readonly store = inject(Store);
  private readonly authFacade = inject(AuthFacade);

  email: any;
  password: any;

  onSignUp() {
    this.authFacade.userSignUp({ email: this.email, password: this.password });
  }

  onLogIn() {
    this.authFacade.userLogIn({ email: this.email, password: this.password });
  }
}
