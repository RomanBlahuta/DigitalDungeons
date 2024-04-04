import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import {ButtonModule} from "../../components/button/button.module";


@NgModule({
  declarations: [
    LandingPageComponent
  ],
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        ButtonModule
    ]
})
export class LandingPageModule { }
