import { MissionUtils } from '@woowacourse/mission-utils';

const INPUT_QUESTIONS = {
  carName: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  tryNumber: '시도할 횟수는 몇 회인가요?',
};

const ERROR_MESSAGES = {
  input: '[ERROR] 입력하지 않으셨습니다.',
};

const InputView = {
  async readCarNames() {
    const INPUT = await MissionUtils.Console.readLineAsync(
      INPUT_QUESTIONS.carName,
    );
    this.inputValid(INPUT);

    return INPUT;
  },

  async readTryNumber() {
    const INPUT = await MissionUtils.Console.readLineAsync(
      INPUT_QUESTIONS.tryNumber,
    );
    this.inputValid(INPUT);

    return Number(INPUT);
  },

  inputValid(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGES.input);
    }
  },
};

export default InputView;
