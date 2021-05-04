import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyAddressComponent } from './verify-address/verify-address.component';

const appRoutes: Routes = [
  {path:'verify-address', component: VerifyAddressComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
