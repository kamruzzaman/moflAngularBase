


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { DefaultSidenavComponent } from './default-sidenav/default-sidenav.component';


const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultSidenavComponent,
  DefaultLayoutComponent
];



@NgModule({
  declarations: [...APP_CONTAINERS],
  imports: [
    CommonModule , RouterModule],
  exports:[...APP_CONTAINERS]
})


export class LayoutModule { }
