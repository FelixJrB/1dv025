/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 1.1.0
 */

// Get the module "calc". Using ./ to indicate that it is
// placed in the same directory as this file.
import * as calc from './calc.js'

// Call the function "addNumbers" in the calc module without
// any arguments and save the result in a new variable or constant.
// TODO: Write your code here.
/**
 * Calls the addNumbers function from the calc module and prints the result.
 */
function callAddNumbers () {
  const result = calc.addNumbers(5, 3) // calls the function addNumbers from calc.js and stores the result in a constant named result
  console.log(result)
}
// Print the result to the terminal (console).
// TODO: Write your code here.
callAddNumbers()
