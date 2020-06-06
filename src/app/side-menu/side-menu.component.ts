import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private auth:AuthorizationService) { }

  ngOnInit(): void {
  }
  logout(){
    return this.auth.logout();
  }

}
