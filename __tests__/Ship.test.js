/*global describe it expect */
const Ship = require('../src/Ship.js');

describe('Ship', () => {
  it('can be instantiated' , () => {
    const ship = new Ship();
    expect(ship).toBeInstanceOf(Object);
  });
 it('has a starting port)', () => {
    const ship = new Ship('Southampton');

    expect(ship.startingPort).toBe('Southampton');
 });
});
