import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardcustComponent } from './cardcust/cardcust.component';
import { CustComponent } from './cust/cust.component';
import { CusteditComponent } from './custedit/custedit.component';
import { CustformComponent } from './custform/custform.component';
import { CustinfoComponent } from './custinfo/custinfo.component';
import { LoginComponent } from './login/login.component';
import { MapcustComponent } from './mapcust/mapcust.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [{path:"cust",component:CustComponent},
{path:"cardcust",component:CardcustComponent},
{path:"custform",component:CustformComponent},
{path:"orders",component:OrdersComponent},
{path:"about",component:AboutComponent},
{path:"login",component:LoginComponent},
{path:"mapcust",component:MapcustComponent},
{path:"custinfo",component:CustinfoComponent},
{path:"custedit",component:CusteditComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
