/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.1.0
 */

// Get the module "hello". Using ./ to indicate that it is
// placed in the same directory as this file.
import * as hello from './hello.js'

// Call the function "sayHello" without any arguments and save the
// return value in the constant "greeting".
const greeting = hello.sayHello()

// Print the value of the constant "greeting" to the terminal (console).
console.log(greeting)
