class App {
  constructor() {
    this.driverType = document.getElementById('driver');
    this.clearButton = document.getElementById('clear-btn');
    this.loadButton = document.getElementById('load-btn');
    this.carContainerElement = document.getElementById('cars-container');
  }

  async init() {
    await this.load();

    // Register click listener
    this.driverType.onclick = this.clear;
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }

    const driver = this.driverType.value == 'Ds' ? true : false;

    Car.list.forEach((car) => {
      if (car.available == driver) {
        const node = document.createElement('div');
        node.className = 'col-md-4';
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      }
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      console.log('hallo');
    }
  };
}
// function removeHidden() {
//   const form = document.getElementById('form-test');
//   form.classList.remove('test');
// }
