import * as counter from './counter';

const reducer = counter.default;

describe('counter reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      counter: 0,
    });
  });

  it('should increase counter by 1', () => {
    expect(reducer(undefined, { type: counter.INC })).toEqual({
      counter: 1,
    });
  });
});
