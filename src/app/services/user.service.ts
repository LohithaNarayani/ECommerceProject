import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {IUsers} from 'src/app/IUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  Url:string="http://localhost:3000/users";


  constructor(private httpClient: HttpClient) { }

  getData(){
    this.httpClient.get(this.Url).subscribe(data => console.log(data));
    return this.httpClient.get<IUsers[]>(this.Url);
  }
  postRegData(storeRegData:IUsers){
    const httpHeaders=new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this.httpClient.post(this.Url,storeRegData);
    
  }
}
