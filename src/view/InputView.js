import { MissionUtils } from "@woowacourse/mission-utils";

const INPUT_QUESTIONS = {
    carName : "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
}

const ERROR_MESSAGES = {
    input : "[ERROR] 입력하지 않으셨습니다."
}

const InputView = {
    async readCarNames () {
        const INPUT = await MissionUtils.Console.readLineAsync(INPUT_QUESTIONS.carName)
        this.inputValid(INPUT)

        return INPUT
    },

    inputValid(input){
        if(!input){
            throw new Error(ERROR_MESSAGES.input)
        }
    }

}

export default InputView