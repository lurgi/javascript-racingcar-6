const ERROR_MESSAGES = {
  notValid: '[ERROR] 이름은 5자이하, 2개이상, 쉼표로 구분해주세요.',
};

class Race {
  setCars(carNames) {
    const CAR_NAME_ARR = carNames.split(',');
    this.#validCarNames(CAR_NAME_ARR);
  }

  #validCarNames(carNames) {
    if (carNames.length < 2) {
      throw new Error(ERROR_MESSAGES.notValid);
    }
    carNames.forEach((name) => {
      if (!name) {
        throw new Error(ERROR_MESSAGES.notValid);
      }
      if (name.length > 5) {
        throw new Error(ERROR_MESSAGES.notValid);
      }
    });
  }
}

export default Race;
