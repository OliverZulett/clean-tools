import moment from 'moment';

class Clock {
  constructor() {
    this.displayCurrentDate();
    this.displayCurrentTime();
  }

  private displayCurrentTime(): void {
    setInterval(() => {
      console.log(`Current time is: ${moment().format('LTS')}`);
    }, 1000);
  }

  private displayCurrentDate(): void {
    console.log(`Current date is: ${moment().format('LL')}`);
  }
}

const digitalClock = new Clock();
