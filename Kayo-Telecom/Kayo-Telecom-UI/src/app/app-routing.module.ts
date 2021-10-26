import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { PurchaseplanComponent } from './purchaseplan/purchaseplan.component';
import { EditdeviceplansComponent } from './editdeviceplans/editdeviceplans.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'userinfo', component: UserinfoComponent },
{ path: 'purchaseplan', component: PurchaseplanComponent },
{ path: 'editdeviceplans', component: EditdeviceplansComponent },
{ path: 'myaccount', component: MyaccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
