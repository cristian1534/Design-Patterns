import { User } from "./User";
import { UserBuilder } from "./UserBuilder";

let user: User = UserBuilder.user()
  .withName("Pedro Gomez")
  .withPassword("123")
  .build();

user.data();