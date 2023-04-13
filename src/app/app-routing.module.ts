import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDisplayComponent} from './product-display/product-display.component'
const routes: Routes = [
  {path: '', component: ProductDisplayComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
