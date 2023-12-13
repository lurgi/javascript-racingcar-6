import Race from '../../src/model/Race';

/* eslint-disable */
describe('Race 클래스', () => {
  test.each(['eeeeee,rq', '1', ',,'])('setCars 에러', (input) => {
    const RACE = new Race();
    expect(() => RACE.setCars(input)).toThrow('[ERROR]');
  });
});
