import {animate, state, style, transition, trigger} from '@angular/animations';

export enum ButtonHoverAnimationStateEnum {
  NO_HOVER = 'no-hover',
  HOVER = 'hover',
}

export const buttonHoverAnimation = trigger('buttonHoverAnimation', [
  state(ButtonHoverAnimationStateEnum.NO_HOVER, style({
    width: '222px',
  })),
  state(ButtonHoverAnimationStateEnum.HOVER, style({
    width: '360px',
  })),
  transition(
    `${ButtonHoverAnimationStateEnum.NO_HOVER} <=> ${ButtonHoverAnimationStateEnum.HOVER}`,
    animate('0.2s ease-in-out'),
  ),
]);
