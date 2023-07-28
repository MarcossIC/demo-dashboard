import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { CommonModule } from "@angular/common";
import { RedirectComponent } from "./common/redirect/redirect.component";
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from "./common/notfound/notfound.component";
import { UserPanelModule } from "./userpanel/userpanel.module";
import { SuccessAlertComponent } from "./components/alert/alert.component";
import { SharedModule } from "./common/shared.module";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    DashboardModule,
    UserPanelModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent, RedirectComponent, NotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


