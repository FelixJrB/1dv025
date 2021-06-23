/**
 * Tests for the calc module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.1.0
 */

import * as calc from '../src/calc.js'

// ------------------------------------------------------------------------------
//  addNumbers
// ------------------------------------------------------------------------------
describe('addNumbers', () => {
  describe('return value', () => {
    test('it should return 42', () => {
      expect(calc.addNumbers()).toEqual(42)
    })
  })
})
