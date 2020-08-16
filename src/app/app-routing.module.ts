import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ManageProductComponent } from './Admin/manage-product/manage-product.component';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { ManageVideoComponent } from './Admin/manage-video/manage-video.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',component:AuthComponent,children:[
    {path:'',component:SignInComponent}
  ]
  },
  {
    path: 'admin-panel', component: AdminComponent, canActivate:[AuthGuardService], children: [
      { path: '', component: DashboardComponent },
      { path: 'manageProduct', component: ManageProductComponent },
      { path: 'manageVideo',component:ManageVideoComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
