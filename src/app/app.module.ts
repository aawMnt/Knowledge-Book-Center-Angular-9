import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './common/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './common/navbar/navbar.component';
import {MatBadgeModule} from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SliderModule } from 'angular-image-slider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatCardModule} from '@angular/material/card';
import { CartInfoComponent } from './cart-info/cart-info.component';
import { EcomAdminLoginComponent } from './admin/ecom-admin-login/ecom-admin-login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { authInterceptorProviders } from './service/Authecom.interceptor';
import { EcomAdminDashboardComponent } from './admin/ecom-admin-dashboard/ecom-admin-dashboard.component';
import { EcomAdminSidebarComponent } from './admin/ecom-admin-sidebar/ecom-admin-sidebar.component';
import { EcomAdminHomeComponent } from './admin/ecom-admin-home/ecom-admin-home.component';
import { EcomAdminAddBookComponent } from './admin/ecom-admin-add-book/ecom-admin-add-book.component';
import {MatListModule} from '@angular/material/list';
import { EcomAdminViewBookComponent } from './admin/ecom-admin-view-book/ecom-admin-view-book.component';
import { EcomAdminBookUpdateComponent } from './admin/ecom-admin-book-update/ecom-admin-book-update.component';
import { EcomPlaceOrderComponent } from './ecom-place-order/ecom-place-order.component';
import {MatStepperModule} from '@angular/material/stepper';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { EcomAboutUsComponent } from './common/ecom-about-us/ecom-about-us.component';
import {MatSelectModule} from '@angular/material/select';
import { EcomOrdersViewComponent } from './admin/ecom-orders-view/ecom-orders-view.component';
import {MatChipsModule} from '@angular/material/chips';
import { EcomViewDetailsComponent } from './admin/ecom-view-details/ecom-view-details.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EcomSideNavComponent } from './common/navbar/ecom-side-nav/ecom-side-nav.component';
import { HomeComponent } from './home/home.component';
import { ImgSliderComponent } from './common/ecom-about-us/img-slider/img-slider.component';








@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    CartInfoComponent,
    EcomAdminLoginComponent,
    EcomAdminDashboardComponent,
    EcomAdminSidebarComponent,
    EcomAdminHomeComponent,
    EcomAdminAddBookComponent,
    EcomAdminViewBookComponent,
    EcomAdminBookUpdateComponent,
    EcomPlaceOrderComponent,
    EcomAboutUsComponent,
    EcomOrdersViewComponent,
    EcomViewDetailsComponent,
    EcomSideNavComponent,
    HomeComponent,
    ImgSliderComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    SliderModule,
    CarouselModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatStepperModule,
    NgxPaginationModule,
    MatSelectModule,
    MatChipsModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,
    FlexLayoutModule,
    MatSidenavModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule

     
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
