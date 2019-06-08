import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HomeComponent } from './home/home.component';
import { ProductviewComponent } from './productview/productview.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ProductviewparaComponent } from './productviewpara/productviewpara.component';

const routes:Routes =[
  {path:'home',component:HomeComponent},
  {path:'productlist', component:ProductlistComponent},
  {path:'productview',component:ProductviewComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart',component:CartComponent},
  {path:'productviewpara/:parval',component:ProductviewparaComponent},
  { path: '',redirectTo: 'home', pathMatch: 'full'}   //for setting as default page for the server
]

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    HomeComponent,
    ProductviewComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProductviewparaComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
