import Race from '../../src/model/Race';

/* eslint-disable */
describe('Race 클래스', () => {
  test.each(['eeeeee,rq', '1', ',,', '123,123'])('setCars 에러', (input) => {
    const RACE = new Race();
    expect(() => RACE.setCars(input)).toThrow('[ERROR]');
  });

  test.each([NaN, -5, 51])('setTry 에러', (input) => {
    const RACE = new Race();
    expect(() => RACE.setTry(input)).toThrow('[ERROR]');
  });
});
