import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/layout/panel/panel.component';
import { IsAuthGuard } from './guards/is-auth.guard';
import { IsNotAuthGuard } from './guards/is-not-auth.guard';

const routes: Routes = [
    {
        path:'',redirectTo:'/login',pathMatch:'full'
    },
    {
        path:'login',component:LoginComponent,canActivate:[IsAuthGuard]
    },
    {
        path:'panel',component:PanelComponent,canActivate:[IsNotAuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }