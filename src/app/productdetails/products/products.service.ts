import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  photoUrl: string;
  Price:number;
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products:Product[] = 
  [
    {
      name: 'Redmi Note 12',
      photoUrl: './assets/photos/redminote12.jpg',
      Price:16000,
    },  
    {
      name: 'Redmi 9 Active',
      photoUrl: './assets/photos/redmi9.jpg',
      Price:6499,
      
    },
    {
      name: 'Realmi 9 pro',
      photoUrl: './assets/photos/realmi9pro.jpg',
      Price:11000,
      
    },
    {
      name: 'Lenovo Thinkpad T490S',
      photoUrl: './assets/photos/lenovo.jpg',
      Price:72000,
      
    },
    {
      name: "MacBook-Air",
      photoUrl: './assets/photos/MacBook.jpg',
      Price:99499,
      
    },
    {
      name: 'MackBook-Pro 2022',
      photoUrl: './assets/photos/MacBook-Pro.jpg',
      Price:120599,
      
    },
    {
      name: 'HP Pavilion 13-AN0010NR',
      photoUrl: './assets/photos/HP.jpg',
      Price:60999,
    },
    {
      name: 'HP 15-DW1151NIA',
      photoUrl: './assets/photos/HP15.jpg',
      Price:79999,
    },
    {
      name: 'Acer Aspire A315-58',
      photoUrl: './assets/photos/AcerAspireA315.jpg',
      Price:73499,
    },
    {
      name: 'IPAD AIR 10.9INC',
      photoUrl: './assets/photos/IPADAir10.jpg',
      Price:55979,
    },
    {
      name: 'Samsung Galaxy Tab',
      photoUrl: './assets/photos/SamsungTab.jpg',
      Price:37999,
    },
    {
      name: 'APPLE IPAD 8th GEN',
      photoUrl: './assets/photos/AppleIPAD.jpg',
      Price:29900,
    },
    {
      name: 'Redmi Buds Air 3',
      photoUrl: './assets/photos/RedmiBuds.jpg',
      Price:990,
    },
    {
      name: 'Boat Realme JBL',
      photoUrl: './assets/photos/BoatJBL.jpg',
      Price:899,
    }

  ]
}