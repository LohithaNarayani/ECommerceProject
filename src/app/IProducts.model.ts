export interface IMobilesList{
    id:string;
    mobname:string;
    specifications:string;
    image:string;
    price:string;
    rating:string;
}

export interface IWatchesList{
    id:string;
    watchname:string;
    features:string;
    image:string;
    price:string;
    rating:string;
}

export interface ILaptopsList{
    id:string;
    lapname:string;
    specifications:string;
    image:string;
    processor:string;
    price:string;
    rating:string;
}

export interface ICartList{
    id:string;
    username:string;
    email:string;
    mobname:string;
    lapname:string;
    watchname:string;
    addtocart:string;
    buy:string;
    price:string;

}