import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IMobilesList } from 'src/app/IProducts.model';
import { AdminService } from 'src/app/services/admin.service';
import {HttpClient,HttpEventType} from '@angular/common/http';


@Component({
  selector: 'app-admincreate',
  templateUrl: './admincreate.component.html',
  styleUrls: ['./admincreate.component.scss']
})
export class AdmincreateComponent implements OnInit {

  selectedFile!: File;
  apiUrl:string="http://localhost:3000/mobilesList";

  MobileData=<IMobilesList>{};

  constructor(private adminservice:AdminService,private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
    const fd= new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name);
    this.httpClient.post(this.apiUrl,fd,{
      reportProgress:true,
      observe:'events'
    })
      .subscribe(event =>{
      console.log(event);
    });
  }

  adminCreate(createForm:NgForm){
    console.log(createForm.value.id);
    console.log(createForm.value.name);
    console.log(createForm.value.specifications);
    console.log(createForm.value.price);
    console.log(createForm.value.image);

    const insert:any ={id:createForm.value.id, name:createForm.value.name,
      specifications:createForm.value.specifications, price:createForm.value.price};
this.adminservice.createMobileData(insert).subscribe(data =>{
console.log(createForm);

}); 
    
  }
}
