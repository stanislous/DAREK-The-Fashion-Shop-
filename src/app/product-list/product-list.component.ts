import { Component, OnInit } from '@angular/core';
import { IProducts } from './products';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  imageWidth:number = 10;
  products:IProducts[];

  constructor(private _dataService: DataService) { 
    
   }

  ngOnInit() {
    this.products = this._dataService.getProducts();
  }

}
