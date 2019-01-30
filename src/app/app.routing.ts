import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/layout/panel/panel.component';

const routes: Routes = [
    {
        path:'',redirectTo:'/panel',pathMatch:'full'
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'panel',component:PanelComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }