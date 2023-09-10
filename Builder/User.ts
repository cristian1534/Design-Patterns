export class User {
  private _Name: string;
  private _Password: string;

  constructor(name: string, password: string) {
    this._Name = name;
    this._Password = password;
  }

  public getName(): string {
    return this._Name;
  }

  public setName(name: string) {
    this._Name = name;
  }

  public getPassword(): string {
    return this._Password;
  }

  public setPassword(password: string) {
    this._Password = password;
  }

  public data(): void {
    console.log("NAME: ", this._Name);
    console.log("PASSWORD: ", this._Password);
  }
}
