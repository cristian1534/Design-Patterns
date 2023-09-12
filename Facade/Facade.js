// Watch Movie use case...
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.on = function () {
        console.log("Light is on");
    };
    Light.prototype.off = function () {
        console.log("Light is off");
    };
    return Light;
}());
var Speaker = /** @class */ (function () {
    function Speaker() {
    }
    Speaker.prototype.on = function () {
        console.log("Speaker is on");
    };
    Speaker.prototype.off = function () {
        console.log("Speaker is off");
    };
    return Speaker;
}());
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.on = function () {
        console.log("TV is on");
    };
    TV.prototype.off = function () {
        console.log("TV is off");
    };
    return TV;
}());
var HomeTheater = /** @class */ (function () {
    function HomeTheater(light, speaker, tv) {
        this.light = light;
        this.speaker = speaker;
        this.tv = tv;
    }
    HomeTheater.prototype.watchTV = function () {
        this.light.off();
        this.speaker.on();
        this.tv.on();
    };
    HomeTheater.prototype.endTV = function () {
        this.light.on();
        this.speaker.off();
        this.tv.off();
    };
    return HomeTheater;
}());
// User wants to watch a movie...
var light = new Light();
var speaker = new Speaker();
var tv = new TV();
var movie = new HomeTheater(light, speaker, tv);
movie.watchTV();
movie.endTV();
