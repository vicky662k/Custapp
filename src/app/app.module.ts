import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustComponent } from './cust/cust.component';
import { CustinfoComponent } from './custinfo/custinfo.component';
import { CusteditComponent } from './custedit/custedit.component';
import { MapcustComponent } from './mapcust/mapcust.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CustformComponent } from './custform/custform.component';
import { CardcustComponent } from './cardcust/cardcust.component';

@NgModule({
  declarations: [
    AppComponent,
    CustComponent,
    CustinfoComponent,
  
    CusteditComponent,
    MapcustComponent,
    OrdersComponent,
    AboutComponent,
    LoginComponent,
    CustformComponent,
    CardcustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
