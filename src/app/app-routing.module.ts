import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AddImgComponent } from './gallery/add-img/add-img.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServiceComponent } from './services/service/service.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent },
  {path: 'About', component: AboutComponent },
  {path: 'Contact', component: ContactComponent },
  {path: 'Services', component: ServicesComponent },
  {path: 'Service/:id', component: ServiceComponent},
  {path: 'Gallery', component: GalleryComponent },
  {path: 'Gallery/add-img', component: AddImgComponent },
  {path: 'Products', component: ProductsComponent },
  {path: 'Product/:id', component: ProductComponent},
  {path: '', pathMatch: 'full', redirectTo: '/Home' },
  {path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
