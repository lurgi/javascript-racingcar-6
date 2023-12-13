import Race from './model/Race';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

class App {
  async play() {
    this.race = new Race();

    await this.playCarName();

    //TODO 횟수 입력받기
    await this.playTry();

    //TODO 실행 결과 출력하기
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
    /**
     * 횟수 입력 받고,
     * 잘못된 입력인지 확인하기 및 테스트
     * 경주 클래스에 할당하기
     */
    try {
      const TRY_NUMBER = await InputView.readTryNumber();
      this.race.setTry(TRY_NUMBER);
    } catch (error) {
      OutputView.print(error.message);
      await this.playTry();
    }
  }
}

export default App;
