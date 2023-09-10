"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBuilder = void 0;
var User_1 = require("./User");
var UserBuilder = /** @class */ (function () {
    function UserBuilder() {
        this._Name = "";
        this._Password = "";
    }
    UserBuilder.user = function () {
        return new UserBuilder();
    };
    UserBuilder.prototype.withName = function (name) {
        this._Name = name;
        return this;
    };
    UserBuilder.prototype.withPassword = function (password) {
        this._Password = password;
        return this;
    };
    UserBuilder.prototype.build = function () {
        var user = new User_1.User(this._Name, this._Password);
        return user;
    };
    return UserBuilder;
}());
exports.UserBuilder = UserBuilder;
