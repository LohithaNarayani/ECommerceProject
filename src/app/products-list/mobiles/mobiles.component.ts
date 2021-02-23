import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICartList, IMobilesList } from 'src/app/IProducts.model';
import { CartitemsService } from 'src/app/services/cartitems.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {

  mobileList:IMobilesList[]=[];
  cartitemList:ICartList[]=[];
  mobname="";
  price="";

  cartData=<ICartList>{};

  @Input() email:string="";
  @Input() username:string="";

  constructor(private router:Router,private productservice:ProductsService,
                      private cartitemsservice:CartitemsService) { }

  ngOnInit(): void {
    console.log(this.email);
    console.log(this.username);
    this.productservice.getMobilesData().subscribe(data =>{
      this.mobileList=data;
    });
  }

  onSearch(){
    if(this.mobname == ""){
      this.ngOnInit();
    }
    else{
      this.mobileList = this.mobileList.filter(res =>{
        return res.mobname.toLocaleLowerCase().match(this.mobname.toLocaleLowerCase());
      });
    }
  }

  addToCart(mobName:any,price:any){
    window.confirm("Do u want to cart this product?");
    console.log(mobName,price);
    const cartitemsData:any ={mobname:mobName,price:price,addtocart:"yes" , buy:"no"};
    this.cartitemsservice.mobCartData(cartitemsData).subscribe(data =>{
      console.log(data);
      window.alert('Your product has been added to the cart!');
      this.router.navigateByUrl('/cartedlist');
    });
  }

}
