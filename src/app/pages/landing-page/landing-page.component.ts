import {Component, OnInit} from '@angular/core';
import {ButtonColorsEnum, ButtonModel, ButtonTypesEnum} from "../../components/button/button.model";
import {Store} from "@ngrx/store";

@Component({
  selector: 'dd-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  public startButtonModel: ButtonModel;
  public aboutButtonModel: ButtonModel;

  constructor(private store$: Store) {
  }

  public ngOnInit(): void {
    this.startButtonModel = ButtonModel.create('Start', {
      color: ButtonColorsEnum.MEDIUM,
      type: ButtonTypesEnum.LANDING,
      onClick: this.onStartButtonClick.bind(this),
    });

    this.aboutButtonModel = ButtonModel.create('About', {
      color: ButtonColorsEnum.MEDIUM,
      type: ButtonTypesEnum.LANDING,
      onClick: this.onAboutButtonClick.bind(this),
    });
  }

  public onStartButtonClick(): void {
    console.log('START');
  }

  public onAboutButtonClick(): void {
    console.log('ABOUT');
  }
}
