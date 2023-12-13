import { MissionUtils } from '@woowacourse/mission-utils';

const OUTPUT_MESSAGE = {
  resultStart: '\n실행 결과',
  barString: '-',
  newLine: '\n',
  noWinner: '최종 우승자 없음',
  winner: (names) => `최종 우승자 : ${names.join(',')}`,
};

const OutputView = {
  print(string) {
    MissionUtils.Console.print(string);
  },

  printResultStart() {
    this.print(OUTPUT_MESSAGE.resultStart);
  },

  printResult(object) {
    const CAR_NAMES = Object.keys(object);
    CAR_NAMES.forEach((name) =>
      this.print(`${name} : ${OUTPUT_MESSAGE.barString.repeat(object[name])}`),
    );
    this.print('');
  },

  printNoWinner() {
    this.print(OUTPUT_MESSAGE.noWinner);
  },
  printWinner(object, max) {
    const NAMES = Object.keys(object);
    const WINNER = [];
    NAMES.forEach((name) => {
      if (object[name] === max) {
        WINNER.push(name);
      }
    });
    this.print(OUTPUT_MESSAGE.winner(WINNER));
  },
};

export default OutputView;
