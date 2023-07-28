import { Component } from "@angular/core";
import { UserActiveService } from "../userActiveService.service";
import { Router } from "@angular/router";

@Component({
    selector: 'not-found',
    templateUrl: './notfound.component.html',
    styleUrls: ['./../sharedStyle.css']
  })
  export class NotFoundComponent  {
    constructor(private service: UserActiveService, private router: Router){}


    redirectToUserPanel(){
      this.router.navigate(['/dashboard/'+this.service.userActive.id]);
    }
  }