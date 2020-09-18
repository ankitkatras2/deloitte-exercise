import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any = [];

  constructor(private productService: ProductsService, config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      const products = data.products;
      this.product = products.filter(x => x.id === Number(sessionStorage.getItem('productId')));
    });
  }

}
