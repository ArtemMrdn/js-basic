//Пример работы, таймер + callback

class Timer {
  constructor(selector, interval) {
    this.element = document.querySelector(selector);
    this.interval = interval;
    this.value = 0;
    this.timerId = null;
  }

  start() {
    if (!this.timerId)
      // У стрелочных функций нет контекста, они используют контекст той функции, в которой были созданы
      // стрелочная функция - удобный способ передачи функции обратного вызова (callback function)
      this.timerId = setInterval(() => this.tick(), this.interval);
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  tick() {
    console.log(this);
    this.value++;
    this.showValue();
  }

  reset() {
    this.value = 0;
  }

  showValue() {
    this.element.textContent = this.value;
  }
}

let timer = new Timer("#timerOutput", 1000);

document.querySelector("#startBtn").addEventListener("click", function () {
  timer.start();
});

document.querySelector("#stopBtn").addEventListener("click", function () {
  timer.stop();
});

document.querySelector("#resetBtn").addEventListener("click", function () {
  timer.reset();
});
