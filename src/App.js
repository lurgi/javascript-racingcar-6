import Race from "./model/Race";
import InputView from "./view/InputView";

class App {
  async play() {
    //TODO 자동차 이름 입력받기
    /**
     * 1. 자동차 경주 클래스 만들기
     * 2. 자동차 이름 입력받기.
     * 3. 자동차 이름으로 자동차 클래스 만들고 경주 객체에 담기
     */
    this.race = new Race();

    await this.playCarName()

    //TODO 횟수 입력받기
    //TODO 실행 결과 출력하기
    //TODO 우승자 출력하기
  }

  async playCarName(){
    const CAR_NAMES = await InputView.readCarNames();
  }
}

export default App;
