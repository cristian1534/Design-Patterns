"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserBuilder_1 = require("./UserBuilder");
var user = UserBuilder_1.UserBuilder.user()
    .withName("Pedro Gomez")
    .withPassword("123")
    .build();
user.data();
