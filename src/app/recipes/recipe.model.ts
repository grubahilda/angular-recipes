export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public preparingTime: number;

  constructor(name: string, desc: string, image: string, prepTime: number) {
    this.name = name;
    this.description = desc;
    this.imagePath = image;
    this.preparingTime = prepTime;
  }
}
