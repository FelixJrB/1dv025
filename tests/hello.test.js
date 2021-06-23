/**
 * Tests for the hello module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.1.0
 */

import * as hello from '../src/hello.js'

// ------------------------------------------------------------------------------
//  sayHello
// ------------------------------------------------------------------------------
describe('sayHello', () => {
  describe('return value', () => {
    test("it should return 'Hello, World!'", () => {
      expect(hello.sayHello()).toEqual('Hello, World!')
    })
  })
})
