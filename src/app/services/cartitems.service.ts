import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ICartList } from '../IProducts.model';

@Injectable({
  providedIn: 'root'
})
export class CartitemsService {

  
  HttpUrl:string="http://localhost:3000/cartitems";
  

  constructor(private httpClient: HttpClient) { }

  getMobCartData(){
    console.log(this.httpClient.get(this.HttpUrl));
    this.httpClient.get(this.HttpUrl).subscribe({
      next: function (res){
        console.log(res);
      },
      error: function (err){
        console.log(err);
      } 
    })
    this.httpClient.get(this.HttpUrl).subscribe(
      data => console.log(data));
      return this.httpClient.get<ICartList[]>(this.HttpUrl);
  }

  mobCartData(cartmobData:ICartList){
    return this.httpClient.post(this.HttpUrl,cartmobData);
}
  removeCartData(id:ICartList){
    return this.httpClient.delete(this.HttpUrl +"/" +id).subscribe(
      (data) =>{
        console.log(data);
      },
      (error) =>
    console.log("Error" +error));
  }

  getLapCartData(){
    console.log(this.httpClient.get(this.HttpUrl));
    this.httpClient.get(this.HttpUrl).subscribe({
      next: function (res){
        console.log(res);
      },
      error: function (err){
        console.log(err);
      } 
    })
    this.httpClient.get(this.HttpUrl).subscribe(
      data => console.log(data));
      return this.httpClient.get<ICartList[]>(this.HttpUrl);
  }
  createLapCartData(cartlapData:ICartList){
    return this.httpClient.post(this.HttpUrl,cartlapData);
  }

  getWatchCartData(){
    console.log(this.httpClient.get(this.HttpUrl));
    this.httpClient.get(this.HttpUrl).subscribe({
      next: function (res){
        console.log(res);
      },
      error: function (err){
        console.log(err);
      } 
    })
    this.httpClient.get(this.HttpUrl).subscribe(
      data => console.log(data));
      return this.httpClient.get<ICartList[]>(this.HttpUrl);
  }
  createWatchCartData(cartwatchData:ICartList){
    return this.httpClient.post(this.HttpUrl,cartwatchData);
  }
  }
