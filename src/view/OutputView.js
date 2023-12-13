import { MissionUtils } from '@woowacourse/mission-utils';

const OUTPUT_MESSAGE = {
  resultStart: '\n실행 결과',
  barString: '-',
  newLine: '\n',
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

  printNoWinner() {},
  printWinner() {},
};

export default OutputView;
