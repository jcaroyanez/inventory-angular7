import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryRoutingModule } from './category.routing';
import { InputsModule, WavesModule, TableModule, ButtonsModule, CollapseModule  } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListCategoryComponent } from './list-category/list-category.component';

const MDB_MODULES = [
  InputsModule,
  WavesModule,
  TableModule,
  ButtonsModule,
  CollapseModule
];
@NgModule({
  declarations: [
    AddCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ...MDB_MODULES,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
