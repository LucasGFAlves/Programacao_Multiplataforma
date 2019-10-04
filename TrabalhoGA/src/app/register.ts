
export class Register {
  public id: number;
  public idHero: number;
  public name: string;
  

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
