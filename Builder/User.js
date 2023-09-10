"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, password) {
        this._Name = name;
        this._Password = password;
    }
    User.prototype.getName = function () {
        return this._Name;
    };
    User.prototype.setName = function (name) {
        this._Name = name;
    };
    User.prototype.getPassword = function () {
        return this._Password;
    };
    User.prototype.setPassword = function (password) {
        this._Password = password;
    };
    User.prototype.data = function () {
        console.log("NAME: ", this._Name);
        console.log("PASSWORD: ", this._Password);
    };
    return User;
}());
exports.User = User;
