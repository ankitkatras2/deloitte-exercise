import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss']
})
export class ProductsSearchComponent implements OnInit {
  productsCount: Number = 0;
  products: any = [];
  val2 = 3;

  constructor(private productService: ProductsService, config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data.products;
      if (this.products.length > 0) {
        this.productsCount = this.products.length;
        console.log(this.productsCount);
      }
    });
  }
}
