import { DataSourceProduct } from './data-source';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../../models/product.model';
import {CdkTableDataSourceInput, CdkTableModule} from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import {BtnComponent} from '../../components/btn/btn.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  imports: [NavbarComponent,
    CdkTableModule,
    HttpClientModule,
    CommonModule,
    BtnComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './table.component.html'
})
export class TableComponent {

  dataSource = new DataSourceProduct();

  columns: string[] = ['#No', 'Name', 'price','cover','actions'];
  total = 0;
  input = new FormControl('',{nonNullable: true});

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotal();
    });

    this.input.valueChanges
    .pipe(
      debounceTime(3000),
    )
    .subscribe(value => {
      this.dataSource.find(value);
      this.total = this.dataSource.getTotal();
    });
  }

  update(product:Product){
    this.dataSource.update(product.id, {price: 20});
    this.total = this.dataSource.getTotal();
  }

  /*this.miServicio.getDatos()
  .pipe(
    filter(datos => datos.length > 0),
    map(datos => datos.map(item => item.propiedad))
  )
  .subscribe(TODO);*/

}

