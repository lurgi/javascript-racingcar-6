import Race from './model/Race';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

class App {
  async play() {
    this.race = new Race();

    await this.playCarName();
    await this.playTry();
    this.playResults();
    // TODO 우승자 출력하기
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
    OutputView.printResultStart();

    const TRY_NUMBER = this.race.getTry();
    for (let cnt = 0; cnt < TRY_NUMBER; cnt += 1) {
      this.race.genGoOrNot();
      const NAME_DIS_OBJ = this.race.getCarsNamesAndDistance();
      OutputView.printResult(NAME_DIS_OBJ);
    }
  }
}

export default App;
