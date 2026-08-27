import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AuthFacade } from '../state/auth.facade';
import { selectIsLoggedIn } from '../state/auth.selectors';
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

  isLoggedIn = this.store.selectSignal(selectIsLoggedIn);
  onSignUp() {
    this.authFacade.userSignUp({ email: this.email, password: this.password });
  }

  onLogIn() {
    this.authFacade.userLogIn({ email: this.email, password: this.password });
  }

  onSignOut() {
    this.authFacade.userSignOut();
  }
}
