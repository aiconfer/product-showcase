import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  columns: any = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductData().subscribe((products) => {
      this.columns = this.generateColumns(products, 4);
    });
  }

  generateColumns(products: Product[], numColumns: number) {
    const columns: any = [];

    for (let i = 0; i < numColumns; i++) {
      columns.push([]);
    }

    let column = 0;

    products.forEach((product) => {
      columns[column].push(product);
      column = (column + 1) % numColumns;
    });

    return columns;
  }
}
