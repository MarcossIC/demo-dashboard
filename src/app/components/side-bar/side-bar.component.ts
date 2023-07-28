import { Component } from '@angular/core';
import { CustomerPaymentManager } from 'src/app/dashboard/customers/customerPaymentManager.service';
import { EmployeesAdminService } from 'src/app/dashboard/employeeAdminManager.service';
import { Router } from "@angular/router";
import { UserActiveService } from 'src/app/common/userActiveService.service';


@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent{

  constructor(
      private router: Router, 
      protected customerManager: CustomerPaymentManager, 
      protected employeeManager: EmployeesAdminService,
      protected service: UserActiveService
    ) { }
  

  isLinkActive(url: string): boolean {
    return this.router.isActive(url, true);
  }

  redirect(){
    this.router.navigate(['/']);
  }
}