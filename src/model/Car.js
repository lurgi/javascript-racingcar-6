const ERROR_MESSAGES = {
  notValid: '[ERROR] 이름은 5자이하여야 합니다.',
};

class Car {
  #distance = 0;

  #name;

  constructor(name) {
    this.#validName(name);
    this.#name = name;
  }

  forward() {
    this.#distance += 1;
  }

  getDistance() {
    return this.#distance;
  }

  getName() {
    return this.#name;
  }

  #validName(name) {
    if (!name) {
      throw new Error(ERROR_MESSAGES.notValid);
    }
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGES.notValid);
    }
  }
}

export default Car;
