export interface IOptional {

}

export class Model {
  public optional: IOptional;

  constructor(optional?: IOptional) {
    this.optional = optional || {};
  }

  public static create(optional?: IOptional): Model {
    return new Model(optional);
  }
}

