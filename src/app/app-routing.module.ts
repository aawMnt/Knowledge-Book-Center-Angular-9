import { HomeComponent } from './home/home.component';
import { EcomViewDetailsComponent } from './admin/ecom-view-details/ecom-view-details.component';
import { EcomOrdersViewComponent } from './admin/ecom-orders-view/ecom-orders-view.component';
import { EcomAboutUsComponent } from './common/ecom-about-us/ecom-about-us.component';
import { EcomPlaceOrderComponent } from './ecom-place-order/ecom-place-order.component';
import { EcomAdminBookUpdateComponent } from './admin/ecom-admin-book-update/ecom-admin-book-update.component';
import { EcomAdminViewBookComponent } from './admin/ecom-admin-view-book/ecom-admin-view-book.component';
import { EcomAdminAddBookComponent } from './admin/ecom-admin-add-book/ecom-admin-add-book.component';
import { EcomAdminHomeComponent } from './admin/ecom-admin-home/ecom-admin-home.component';
import { EcomAdminDashboardComponent } from './admin/ecom-admin-dashboard/ecom-admin-dashboard.component';
import { EcomAdminGuard } from './Guard/ecom-admin.guard';
import { EcomAdminLoginComponent } from './admin/ecom-admin-login/ecom-admin-login.component';
import { CartInfoComponent } from './cart-info/cart-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// canActivate:[EcomAdminGuard] 

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', component: HomeComponent },
  { path: 'cart-info', component: CartInfoComponent },
  { path: 'admin-login', component: EcomAdminLoginComponent },

  {
    path: 'admin-dash', component: EcomAdminDashboardComponent,
    canActivate: [EcomAdminGuard],
    children: [
      { path: '', redirectTo: 'adminHome', pathMatch: 'full' },
      { path: 'adminHome', component: EcomAdminHomeComponent, },
      { path: 'addBook', component: EcomAdminAddBookComponent },
      { path: 'viewBook', component: EcomAdminViewBookComponent },
      {path:'orders',component:EcomOrdersViewComponent},
      { path: 'updateBook/:id', component: EcomAdminBookUpdateComponent },
      {path:'viewDetails/:cId',component:EcomViewDetailsComponent}

    ],
},


  { path: 'placeorder', component: EcomPlaceOrderComponent },
  {path:'about-us',component:EcomAboutUsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
