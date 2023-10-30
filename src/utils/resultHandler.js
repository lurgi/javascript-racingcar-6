import { MissionUtils } from "@woowacourse/mission-utils";

function getRandomeNumberInRange(min, max) {
  return MissionUtils.Random.pickNumberInRange(min, max);
}

function getResultStringOneLine(cars) {
  let string = "";
  cars.forEach((carClass) => {
    const RANDOM = getRandomeNumberInRange(0, 9);
    if (RANDOM >= 4) carClass.setDistancePlusOne();
    string += `${carClass.getName()} : ${carClass.getDistanceString()}\n`;
  });
  return string;
}

const resultHandler = {
  getResultString: ({ tryNumber, cars }) => {
    let stringToPrint = "";
    for (let tryOrder = 0; tryOrder < tryNumber; tryOrder += 1) {
      const STRING_ONE_LINE = getResultStringOneLine(cars);
      stringToPrint += STRING_ONE_LINE;
      stringToPrint += "\n";
    }
    return stringToPrint;
  },

  getWinner: (cars) => {
    const winner = [];
    const SORTED_CARS = [...cars].sort(
      (car1, car2) => car2.getDistanceString().length - car1.getDistanceString()
    );
    const WIN_DISTANCE = SORTED_CARS[0].getDistanceString();
    SORTED_CARS.forEach((car) => {
      if (car.getDistanceString() === WIN_DISTANCE) winner.push(car.getName());
    });
    return winner;
  },

  printWinner: (winner) => {
    const WINNER_STRING = winner.join(", ");
    MissionUtils.Console.print(`최종 우승자 : ${WINNER_STRING}`);
  },
};

export default resultHandler;