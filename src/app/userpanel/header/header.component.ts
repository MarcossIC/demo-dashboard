import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserActiveService } from "src/app/common/userActiveService.service";

@Component({
    selector: 'usepanel-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })
export class UserPanelHeaderComponent {
  user: any = JSON.parse(localStorage.getItem('user') ?? '{}');

  constructor(private router: Router, protected userService: UserActiveService){}

  redirect(){
    this.router.navigate(['/']);
  }
}