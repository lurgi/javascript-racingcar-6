const ERROR_MESSAGES = {
  notValid: '[ERROR] 이름은 5자이하, 2개이상, 쉼표로 구분해주세요.',
};

class Car {
  constructor(name) {
    this.#validName(name);
    this.name = name;
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
