import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainComponent } from './main/main.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StateInfoComponent } from './state-info/state-info.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { StaySafeComponent } from './stay-safe/stay-safe.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MainComponent,
    UserInfoComponent,
    StateInfoComponent,
    LatestNewsComponent,
    StaySafeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
