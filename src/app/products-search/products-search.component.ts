import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss']
})
export class ProductsSearchComponent implements OnInit {
  productsCount: Number = 0;
  products: any = [];
  val2 = 3;
  loading = false;
  constructor(private productService: ProductsService, config: NgbRatingConfig,
    private router: Router) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }
  ngOnInit(): void {
    this.getProducts();
  }

  // Code to fetch the product from the service
  getProducts() {
    this.loading = true;
    this.productService.getProducts().subscribe(data => {
      this.products = data.products;
      if (this.products.length > 0) {
        this.productsCount = this.products.length;
      }
    });
    this.loading = false;
  }

  // Code to fetch clicked product id and navigate to product details page
  gotoDetails(id) {
    sessionStorage.setItem('productId', id);
    this.router.navigate(['/detail']);
  }
}
