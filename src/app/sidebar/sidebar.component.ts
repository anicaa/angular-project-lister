import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../auth/user.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  authUser: User;
  private authUserSub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authUserSub = this.authService.user.subscribe(user => {
      this.authUser = user;
    });
  }

  ngOnDestroy() {
    this.authUserSub.unsubscribe();
  }

}
