import Car from './Car';

const ERROR_MESSAGES = {
  notValid: '[ERROR] 이름은 5자이하, 2개이상, 쉼표로 구분해주세요.',
};

class Race {
  #cars = [];

  setCars(carNames) {
    const CAR_NAME_ARR = carNames.split(',');
    this.#validCarNames(CAR_NAME_ARR);

    this.#cars = CAR_NAME_ARR.map((name) => new Car(name));
  }

  #validCarNames(carNames) {
    if (carNames.length < 2) {
      throw new Error(ERROR_MESSAGES.notValid);
    }
  }
}

export default Race;
