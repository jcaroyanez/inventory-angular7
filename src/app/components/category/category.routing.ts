import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';

const routes:Routes = [
    {
        path:'add',component:AddCategoryComponent
    },
    {
        path:'list',component:ListCategoryComponent
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  })
  export class CategoryRoutingModule { }