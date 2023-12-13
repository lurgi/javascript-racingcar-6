import { MissionUtils } from '@woowacourse/mission-utils';

import Car from './Car';

const ERROR_MESSAGES = {
  notCarValid:
    '[ERROR] 이름은 5자이하, 2개이상, 중복 없이, 쉼표로 구분해주세요.',
  notTryValid: '[ERROR] 숫자 값은 1~50이하의 숫자여야 합니다.',
};

class Race {
  #cars = [];

  #tryNumber;

  setCars(carNames) {
    const CAR_NAME_ARR = carNames.split(',');
    this.#validCarNames(CAR_NAME_ARR);

    this.#cars = CAR_NAME_ARR.map((name) => new Car(name));
  }

  #validCarNames(carNames) {
    if (carNames.length < 2) {
      throw new Error(ERROR_MESSAGES.notCarValid);
    }
    if (carNames.length !== new Set(carNames).size) {
      throw new Error(ERROR_MESSAGES.notCarValid);
    }
  }

  setTry(number) {
    this.#validTryNumber(number);
    this.#tryNumber = number;
  }

  getTry() {
    return this.#tryNumber;
  }

  #validTryNumber(number) {
    if (Number.isNaN(number)) {
      throw new Error(ERROR_MESSAGES.notTryValid);
    }
    if (number < 1 || number > 50) {
      throw new Error(ERROR_MESSAGES.notTryValid);
    }
  }

  genGoOrNot() {
    this.#cars.forEach((car) => {
      const IS_FORWARD = this.#getIsForward();
      if (IS_FORWARD) car.forward();
    });
  }

  getCarsNamesAndDistance() {
    const RETURN_OBJ = {};

    this.#cars.forEach((car) => {
      const NAME = car.getName();
      const DISTANCE = car.getDistance();
      RETURN_OBJ[NAME] = DISTANCE;
    });

    return RETURN_OBJ;
  }

  #getIsForward() {
    const RANDOM = MissionUtils.Random.pickNumberInRange(0, 9);
    if (RANDOM > 4) return true;
    return false;
  }
}

export default Race;
