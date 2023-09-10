export class Pizza {
  private _Flavor: string;
  private _Price: number;

  constructor(flavor: string, price: number) {
    this._Flavor = flavor;
    this._Price = price;
  }

  public getFlavor(): string {
    return this._Flavor;
  }

  public setFlavor(flavor: string): void {
    this._Flavor = flavor;
  }

  public getPrice(): number {
    return this._Price;
  }

  public setPrice(price: number): void {
    this._Price = price;
  }

  public data(): void {
    console.log("Pizza: ", this._Flavor);
    console.log("Price: ", this._Price);
  }
}
