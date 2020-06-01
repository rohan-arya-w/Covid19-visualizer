import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { StateInfoComponent } from './state-info/state-info.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { StaySafeComponent } from './stay-safe/stay-safe.component';


const routes: Routes = [
  {
    path:"main",
    component:MainComponent
  },
  {
    path:"state",
    component:StateInfoComponent
  },
  {
    path:"LatestNews",
    component:LatestNewsComponent
  },
  {
    path:"how-to-stay-safe",
    component:StaySafeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
