import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { StateInfoComponent } from './state-info/state-info.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { StaySafeComponent } from './stay-safe/stay-safe.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, data: { depth: 1 } },
  {
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
