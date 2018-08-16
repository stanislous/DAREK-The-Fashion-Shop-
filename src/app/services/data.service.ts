import { Injectable } from '@angular/core';
import { IProducts } from '../product-list/products';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProducts(): IProducts[]{
    return [
      {
          "productId": 0,
          "productName": "Lego 1",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2016",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "../../assets/pictures/Lego_00.png"
      },
      {
          "productId": 1,
          "productName": "Lego 1",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2016",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "../../assets/pictures/Lego_01.png"
      },
      {
          "productId": 2,
          "productName": "Lego 2",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2016",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "../../assets/pictures/Lego_02.png"
      },
      {
          "productId": 3,
          "productName": "Lego 3",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2016",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "../../assets/pictures/Lego_03.png"
      },
      {
          "productId": 4,
          "productName": "Lego 4",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "../../assets/pictures/Lego_04.png"
      },
      {
          "productId": 5,
          "productName": "Lego 5",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "../../assets/pictures/Lego_05.png"
      },
      {
          "productId": 6,
          "productName": "Lego 6",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "../../assets/pictures/Lego_06.png"
      },
      {
          "productId": 7,
          "productName": "Lego 7",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "../../assets/pictures/Lego_07.png"
      },
      {
          "productId": 8,
          "productName": "Lego 8",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "../../assets/pictures/Lego_08.png"
      },
      {
          "productId": 9,
          "productName": "Lego 9",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "../../assets/pictures/Lego_09.png"
      },
      {
          "productId": 10,
          "productName": "Lego 10",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "../../assets/pictures/Lego_10.png"
      },
      {
          "productId": 11,
          "productName": "Lego 11",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "../../assets/pictures/Lego_11.png"
      },
      {
          "productId": 12,
          "productName": "Lego 12",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "../../assets/pictures/Lego_12.png"
      },
      {
          "productId": 13,
          "productName": "Lego 13",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "../../assets/pictures/Lego_13.png"
      },
      {
          "productId": 14,
          "productName": "Lego 14",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "../../assets/pictures/Lego_14.png"
      },
      {
          "productId": 15,
          "productName": "Lego 15",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "../../assets/pictures/Lego_15.png"
      },
      {
          "productId": 16,
          "productName": "Lego 16",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "../../assets/pictures/Lego_Thumbnail.png"
      }
  ];
  }
}
