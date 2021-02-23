import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MobilesComponent } from './products-list/mobiles/mobiles.component';
import { AdminComponent } from './admin/admin.component';
import { SmartwatchesComponent } from './products-list/smartwatches/smartwatches.component';
import { LaptopsComponent } from './products-list/laptops/laptops.component';
import { AdmincreateComponent } from './admincrud/admincreate/admincreate.component';
import { CartedlistComponent } from './cartedlist/cartedlist.component';

const routes: Routes = [
  {path:'', redirectTo:'/home' , pathMatch:'full'},
  {path:'login',  component:LoginComponent},
  {path:'home',  component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'mobiles', component:MobilesComponent},
  {path:'admin', component:AdminComponent},
  {path:'smartwatches', component:SmartwatchesComponent},
  {path:'laptops', component:LaptopsComponent},
  {path: 'cartedlist', component:CartedlistComponent},
  {path: 'admincreate', component:AdmincreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
