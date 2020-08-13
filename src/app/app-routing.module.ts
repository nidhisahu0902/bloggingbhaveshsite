import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ManageProductComponent } from './Admin/manage-product/manage-product.component';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';


const routes: Routes = [

  {path:'auth',component:AuthComponent,children:[
    {path:'',component:SignInComponent}
  ]},
  { path: '', component: DashboardComponent },
  {path:'manageproduct',component:ManageProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
