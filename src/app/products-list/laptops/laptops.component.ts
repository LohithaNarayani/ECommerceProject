import { Component, OnInit } from '@angular/core';
import {ICartList, ILaptopsList, IWatchesList} from 'src/app/IProducts.model';
import {Router} from '@angular/router';
import {ProductsService} from 'src/app/services/products.service';
import { CartitemsService } from 'src/app/services/cartitems.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent implements OnInit {

  laptopList:ILaptopsList[]=[];
  cartitemList:ICartList[]=[];
  lapname="";
  cartData=<ICartList>{};

  constructor(private router:Router,private productservice:ProductsService,
    private cartitemsservice:CartitemsService) { }

  ngOnInit(): void {
    this.productservice.getLaptopsData().subscribe(data =>{
      this.laptopList=data;
    });
  }

  onSearch(){
    if(this.lapname == ""){
      this.ngOnInit();
    }
    else{
      this.laptopList = this.laptopList.filter(res =>{
        return res.lapname.toLocaleLowerCase().match(this.lapname.toLocaleLowerCase());
      });
    }
  }

  addToCart(lapName:any,lapPrice:any){
    window.confirm("Do u want to cart this product?");
    console.log(lapName,lapPrice);
    const lapCartData:any ={ lapname:lapName,price:lapPrice,addtocart:"yes" , buy:"no"};
    this.cartitemsservice.createLapCartData(lapCartData).subscribe(data =>{
      console.log(data);
      window.alert('Your product has been added to the cart!');
      this.router.navigateByUrl('/cartedlist');
    });
  }

}
