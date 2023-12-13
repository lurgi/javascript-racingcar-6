import Race from './model/Race';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

class App {
  async play() {
    this.race = new Race();

    await this.playCarName();
    await this.playTry();
    this.playResults();
    //TODO 우승자 출력하기
  }

  async playCarName() {
    try {
      const CAR_NAMES = await InputView.readCarNames();
      this.race.setCars(CAR_NAMES);
    } catch (error) {
      OutputView.print(error.message);
      await this.playCarName();
    }
  }

  async playTry() {
    try {
      const TRY_NUMBER = await InputView.readTryNumber();
      this.race.setTry(TRY_NUMBER);
    } catch (error) {
      OutputView.print(error.message);
      await this.playTry();
    }
  }

  playResults() {
    let cnt = 0;
    const TRY_NUMBER = this.race.getTry();
    while (cnt !== TRY_NUMBER) {
      /**
       * 무작위 숫자를 통해서 전진, 멈춤을 정한다.
       * 전진 한 횟수를 숫자로 받는다.
       * OutputView에서 이름: 횟수 객체를 받고 출력한다.
       */
      cnt += 1;
    }
  }
}

export default App;
