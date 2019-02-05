import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryRoutingModule } from './category.routing';
import { InputsModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListCategoryComponent } from './list-category/list-category.component';

@NgModule({
  declarations: [
    AddCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    InputsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
