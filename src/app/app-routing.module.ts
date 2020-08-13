import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ManageProductComponent } from './Admin/manage-product/manage-product.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path:'manageproduct',component:ManageProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
