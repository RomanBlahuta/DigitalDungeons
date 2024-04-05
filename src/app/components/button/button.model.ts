export enum ButtonColorsEnum {
  ACCENT = '',
  MEDIUM = '',
  DARK = '',
}

export enum ButtonTypesEnum {
  LANDING = '',
  REGULAR = '',
}

export interface IOptional {
  color?: ButtonColorsEnum;
  type?: ButtonTypesEnum;
  onClick?: () => void;
}

export class ButtonModel {
  public title: string;
  public optional: IOptional;

  constructor(title: string, optional?: IOptional) {
    this.title = title;
    this.optional = {
      color: ButtonColorsEnum.MEDIUM,
      type: ButtonTypesEnum.REGULAR,
      onClick: undefined,
      ...optional,
    };
  }

  public static create(title: string, optional?: IOptional): ButtonModel {
    return new ButtonModel(title, optional);
  }
}

