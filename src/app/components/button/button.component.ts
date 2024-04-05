import {Component, Input, OnInit} from '@angular/core';
import {buttonHoverAnimation, ButtonHoverAnimationStateEnum} from "../../shared/animations/button-hover.animation";
import {ButtonModel} from "./button.model";

@Component({
  animations: [buttonHoverAnimation],
  selector: 'dd-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  @Input()
  public model: ButtonModel = ButtonModel.create('Button', {});

  public isHover: boolean = false;
  public hoverAnimationState: ButtonHoverAnimationStateEnum = ButtonHoverAnimationStateEnum.NO_HOVER;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public onClick(): void {
    if (this.model.optional.onClick) {
      this.model.optional.onClick();
    }
  }

  public setHover(hoverValue: boolean): void {
    this.isHover = hoverValue;

    if (hoverValue) {
      this.hoverAnimationState = ButtonHoverAnimationStateEnum.HOVER;
    }
    else {
      this.hoverAnimationState = ButtonHoverAnimationStateEnum.NO_HOVER;
    }

    console.log(this.hoverAnimationState);
  }

}
