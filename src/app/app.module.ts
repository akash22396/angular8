import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './services/service/service.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdwnDirective } from './shared/dropdwn.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { GalleryComponent } from './gallery/gallery.component';
import { AddImgComponent } from './gallery/add-img/add-img.component';
import { ErrorComponent } from './error/error.component';
import { environment } from 'src/environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    ProductEditComponent,
    ServicesComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    DropdwnDirective,
    DropdownDirective,
    GalleryComponent,
    AddImgComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OwlModule ,
     FormsModule,
     ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
