import { Injectable } from '@angular/core';
import {IAdmin} from 'src/app/IUser.model';
import {HttpClient} from '@angular/common/http';
import { IMobilesList } from '../IProducts.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  Url:string="http://localhost:3000/Admin";
  apiUrl:string="http://localhost:3000/mobilesList";

  constructor(private httpClient: HttpClient) { }

  getData(){
    this.httpClient.get(this.Url).subscribe(data => console.log(data));
    return this.httpClient.get<IAdmin[]>(this.Url);
  }
  createMobileData(createMobileData:IMobilesList){
      return this.httpClient.post(this.apiUrl,createMobileData);
  }
}
