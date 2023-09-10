import { User } from "./User";

export class UserBuilder {
  private _Name: string;
  private _Password: string;

  constructor() {
    this._Name = "";
    this._Password = "";
  }

  public static user(): UserBuilder {
    return new UserBuilder();
  }

  public withName(name: string): UserBuilder {
    this._Name = name;
    return this;
  }

  public withPassword(password: string): UserBuilder {
    this._Password = password;
    return this;
  }

  public build(): User {
    let user: User = new User(this._Name, this._Password);
    return user;
  }
}
