import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
    this.getProducts().subscribe(data => {
    });
  }

  // Fetches the products from the JSON file
  public getProducts(): Observable<any> {
    return this.http.get("./assets/products.json");
  }
}