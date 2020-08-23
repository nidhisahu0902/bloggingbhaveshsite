import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HeaderComponent } from './share/header/header.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ManageProductComponent } from './Admin/manage-product/manage-product.component';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { ManageVideoComponent } from './Admin/manage-video/manage-video.component';
import { AdminComponent } from './admin/admin.component';
import { SlugPipe } from './pipes/slug.pipe';
import { ManageContactComponent } from './Admin/manage-contact/manage-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ManageProductComponent,
    AuthComponent,
    SignInComponent,
    ManageVideoComponent,
    AdminComponent,
    SlugPipe,
    ManageContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule, // required animations module
    NgxUiLoaderModule,
    FormsModule,
    EditorModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [SlugPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
