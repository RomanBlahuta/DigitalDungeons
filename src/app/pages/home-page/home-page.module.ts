import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import {HeaderModule} from "../../components/header/header.module";
import {CategoryButtonModule} from "../../components/category-button/category-button.module";


@NgModule({
  declarations: [
    HomePageComponent
  ],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        HeaderModule,
        CategoryButtonModule
    ]
})
export class HomePageModule { }
