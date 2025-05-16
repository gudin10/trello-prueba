import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-scroll',
  imports: [CommonModule,
    NavbarComponent,
    HttpClientModule,
    ScrollingModule
  ],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent {

  products : Product[] = [];

  constructor(
    private http: HttpClient
  )
  {

  }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
}

