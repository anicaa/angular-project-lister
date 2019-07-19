import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todos/todo-detail/todo-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':id', component: TodoDetailComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AuthComponent,
    TodosComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
