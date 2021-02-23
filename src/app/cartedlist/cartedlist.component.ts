import { Component, OnInit } from '@angular/core';
import { ICartList } from '../IProducts.model';
import { CartitemsService } from '../services/cartitems.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cartedlist',
  templateUrl: './cartedlist.component.html',
  styleUrls: ['./cartedlist.component.scss']
})
export class CartedlistComponent implements OnInit {

  cartItemList:ICartList[]=[];
  cartData=<ICartList>{};
  
  
  constructor(private router:Router,private cartitemsservice:CartitemsService) { }

  ngOnInit(): void {
    this.cartitemsservice.getMobCartData().subscribe(data =>{
      this.cartItemList=data;
    });
  }

  removeCartData(id:any){
    window.confirm("Do u want to remove this product from cart ?");
    console.log(id);
    this.cartitemsservice.removeCartData(id);
    window.confirm("Removed the product from cart successfully!!");
    }

}
