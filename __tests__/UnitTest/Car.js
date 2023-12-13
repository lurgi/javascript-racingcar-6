import Car from '../../src/model/Car';

describe('Car Test', () => {
  test.each([1, 2, 3, 4, 50])('forawrd', (number) => {
    const CAR = new Car('1');
    const BEFORE_DIS = CAR.getDistance();
    for (let i = 0; i < number; i += 1) {
      CAR.forward();
    }

    expect(CAR.getDistance()).toBe(BEFORE_DIS + number);
  });
});
