import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsSearchComponent } from './products-search/products-search.component';


const routes: Routes = [
  {
    path: 'detail',
    component: ProductDetailComponent,
  },
  {
    path: 'search',
    component: ProductsSearchComponent
  },
  {
    path: '**',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
