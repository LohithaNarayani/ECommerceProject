import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { MobilesComponent } from './products-list/mobiles/mobiles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { SmartwatchesComponent } from './products-list/smartwatches/smartwatches.component';
import { LaptopsComponent } from './products-list/laptops/laptops.component';
import { AdmincreateComponent } from './admincrud/admincreate/admincreate.component';
import { CartedlistComponent } from './cartedlist/cartedlist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AdminComponent,
    MobilesComponent,
    SmartwatchesComponent,
    LaptopsComponent,
    AdmincreateComponent,
    CartedlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
