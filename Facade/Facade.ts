// Watch Movie use case...
class Light {
  on(): void {
    console.log("Light is on");
  }

  off(): void {
    console.log("Light is off");
  }
}

class Speaker {
  on(): void {
    console.log("Speaker is on");
  }

  off(): void {
    console.log("Speaker is off");
  }
}

class TV {
  on(): void {
    console.log("TV is on");
  }

  off(): void {
    console.log("TV is off");
  }
}

class HomeTheater {
  private light: Light;
  private speaker: Speaker;
  private tv: TV;

  constructor(light: Light, speaker: Speaker, tv: TV) {
    this.light = light;
    this.speaker = speaker;
    this.tv = tv;
  }

  public watchTV() {
    this.light.off();
    this.speaker.on();
    this.tv.on();
  }

  public endTV() {
    this.light.on();
    this.speaker.off();
    this.tv.off();
  }
}

// User wants to watch a movie...

let light = new Light();
let speaker = new Speaker();
let tv = new TV();

let movie = new HomeTheater(light, speaker, tv);
movie.watchTV();
movie.endTV();
