import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'lister';
  isAuthenticated = false;
  private authUserSub: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogin();

    this.authUserSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.authUserSub.unsubscribe();
  }
}
