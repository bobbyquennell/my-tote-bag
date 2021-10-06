import { magicNumber } from './index';

describe("app's magicNumber", () => {
  it('should be 123', () => {
    expect(magicNumber()).toEqual(123);
  });
});
