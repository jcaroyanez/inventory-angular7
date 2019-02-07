import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryRoutingModule } from './category.routing';
import { InputsModule, WavesModule, TableModule, ButtonsModule, CollapseModule  } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListCategoryComponent } from './list-category/list-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';

const MDB_MODULES = [
  InputsModule,
  WavesModule,
  TableModule,
  ButtonsModule,
  CollapseModule,
];

const NGX_BOOTSTRAP = [
  ModalModule.forRoot(),
  PopoverModule.forRoot()
];

@NgModule({
  declarations: [
    AddCategoryComponent,
    ListCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ...MDB_MODULES,
    ...NGX_BOOTSTRAP,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    EditCategoryComponent
  ]
})
export class CategoryModule { }
