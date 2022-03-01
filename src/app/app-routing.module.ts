import { LoginComponent } from './service-components/acl-module/user-module/login/login.component';
import { DefaultLayoutComponent } from './shared/modules/layout/default-layout/default-layout.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:"login",
  component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
