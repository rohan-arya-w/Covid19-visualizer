import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StateInfoComponent } from './state-info/state-info.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { StaySafeComponent } from './stay-safe/stay-safe.component';
import { AuthGuard } from './auth.guard';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component:HomeComponent, children:[{
      path: 'main',
      component: MainComponent,
    },
    {
      path: 'state',
      component: StateInfoComponent,  
  },

  {
    path: 'LatestNews',
    component: LatestNewsComponent,
  },
  {
    path: 'how-to-stay-safe',
    component: StaySafeComponent,
  }
], canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
