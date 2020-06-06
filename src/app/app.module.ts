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
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MainComponent,
    UserInfoComponent,
    StateInfoComponent,
    LatestNewsComponent,
    StaySafeComponent,
    RegisterFormComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
