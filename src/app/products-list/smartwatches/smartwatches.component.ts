import { Component, OnInit } from '@angular/core';
import {IWatchesList} from 'src/app/IProducts.model';
import {Router} from '@angular/router';
import {ProductsService} from 'src/app/services/products.service';
import { CartitemsService } from 'src/app/services/cartitems.service';

@Component({
  selector: 'app-smartwatches',
  templateUrl: './smartwatches.component.html',
  styleUrls: ['./smartwatches.component.scss']
})
export class SmartwatchesComponent implements OnInit {

  watchList:IWatchesList[]=[];
  watchname="";
  price="";

  constructor(private router:Router,private productservice:ProductsService,
                    private cartitemsservice:CartitemsService) { }

  ngOnInit(): void {
    this.productservice.getWatchesData().subscribe(data =>{
      this.watchList=data;
    });
  }

  onSearch(){
    if(this.watchname == ""){
      this.ngOnInit();
    }
    else{
      this.watchList = this.watchList.filter(res =>{
        return res.watchname.toLocaleLowerCase().match(this.watchname.toLocaleLowerCase());
      });
    }
  }

  addToCart(watchName:any,Price:any){
    window.confirm("Do u want to cart this product?");
    console.log(watchName,Price);
    const watchCartData:any ={ watchname:watchName,price:Price,addtocart:"yes" , buy:"no"};
    this.cartitemsservice.createWatchCartData(watchCartData).subscribe(data =>{
      console.log(data);
      window.alert('Your product has been added to the cart!');
      this.router.navigateByUrl('/cartedlist');
    });
  }

}
