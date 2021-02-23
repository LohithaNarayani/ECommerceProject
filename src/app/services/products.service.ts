import { Injectable } from '@angular/core';
import { IMobilesList,ILaptopsList,IWatchesList } from '../IProducts.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl:string="http://localhost:3000/mobilesList";
  httpUrl:string="http://localhost:3000/watchesList";
  ApiURL:string="http://localhost:3000/laptopsList";

  constructor(private httpClient: HttpClient) { }

  getMobilesData(){
    console.log(this.httpClient.get(this.apiUrl));
    this.httpClient.get(this.apiUrl).subscribe({
      next: function (res){
        console.log(res);
      },
      error: function (err){
        console.log(err);
      } 
    })
    this.httpClient.get(this.apiUrl).subscribe(
      data => console.log(data));
      return this.httpClient.get<IMobilesList[]>(this.apiUrl);
  }

  getWatchesData(){
    console.log(this.httpClient.get(this.httpUrl));
    this.httpClient.get(this.httpUrl).subscribe({
      next: function (res){
        console.log(res);
      },
      error: function (err){
        console.log(err);
      } 
    })
    this.httpClient.get(this.httpUrl).subscribe(
      data => console.log(data));
      return this.httpClient.get<IWatchesList[]>(this.httpUrl);
  }

  getLaptopsData(){
    console.log(this.httpClient.get(this.ApiURL));
    this.httpClient.get(this.ApiURL).subscribe({
      next: function (res){
        console.log(res);
      },
      error: function (err){
        console.log(err);
      } 
    })
    this.httpClient.get(this.ApiURL).subscribe(
      data => console.log(data));
      return this.httpClient.get<ILaptopsList[]>(this.ApiURL);
  }
}
