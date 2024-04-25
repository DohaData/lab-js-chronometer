class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback != "undefined") {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime % 6000) / 100);
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString();
    if (stringValue.length == 1) {
      return `0${stringValue}`;
    }
    return `${stringValue}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiSeconds}`;
  }
}
