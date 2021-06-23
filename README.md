# Hello, World!

## Uppgift

Komplettera funktionen `sayHello` i filen `src/hello.js`, så att funktionen returnerar strängen `Hello, World!`.

### Filer

Modulerna `src/app.js` och `src/hello.js` samverkar enligt beroendediagrammet nedan. Du ser även `tests/hello.test.js` (som du inte ska redigera), vilket är den modul som innehåller enhetstest som körs med `npm test`.

![Beroendediagram](/.readme/dependency-graph.svg)

## ...och glöm inte!

### Spara lokalt och skicka till GitLab

Gjort ändringar i koden, sparat dem lokalt och skickat dem till ditt repositorium på GitLab? Glöm inte att följa guiden [Arbetsgång med en övningsuppgift](#/). Använd `git add`, `git commit` och `git push` regelbundet!

### Kör applikation, tester och kontrollera så kodstandarden följs

#### npm install

Innan du kan köra applikationen, eller dess test, måste du exekvera kommandot `npm install` i terminalfönstret för att installera de paket applikationen är beroende av.

```shell
npm install
```

Exempelutskrift:

```shell
added 472 packages, and audited 473 packages in 16s

61 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

#### npm start

För att köra applikationen skriver du kommandot `npm start` i terminalfönstret.

```shell
npm start
```

Exempelutskrift (då uppgiften är löst korrekt):

```shell
> exercise-hello-world@1.1.0 start
> node src/app.js

Hello, World!
```

#### npm test

För att köra applikationens test skriver du kommandot `npm test` i terminalfönstret.

```shell
npm test
```

Exempelutskrift då koden klarar det enda testet.

```node
> exercise-hello-world@1.1.0 test
> npx --node-options=--experimental-vm-modules jest || exit 0

(node:20544) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 PASS  tests/hello.test.js
  sayHello
    return value
      √ it should return 'Hello, World!' (4 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.096 s
Ran all test suites.
```

Exempelutskrift vid fel enligt tester (den förväntade strängen returneras inte av funktionen `sayHello`).

```node
> exercise-hello-world@1.1.0 test
> npx --node-options=--experimental-vm-modules jest || exit 0

(node:5980) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 FAIL  tests/hello.test.js
  sayHello
    return value
      × it should return 'Hello, World!' (4 ms)

  ● sayHello › return value › it should return 'Hello, World!'

    expect(received).toEqual(expected) // deep equality

    Expected: "Hello, World!"
    Received: undefined

      15 |   describe('return value', () => {
      16 |     test("it should return 'Hello, World!'", () => {
    > 17 |       expect(hello.sayHello()).toEqual('Hello, World!')
         |                                ^
      18 |     })
      19 |   })
      20 | })

      at Object.<anonymous> (tests/hello.test.js:17:32)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.752 s, estimated 1 s
Ran all test suites.
```

#### npm run lint

För att kontrollera att koden du skrivit följer kodstandarden skriver du kommandot `npm run lint` i terminalfönstret.

```shell
npm run lint
```

Skulle du till exempel indenterat koden fel och råkat skriva ett semikolon på fel plats kan du få följande utskrift:

```shell
> exercise-hello-world@1.1.0 lint
> npx eslint ./src || exit 0


example/path/exercise-hello-world/src/hello.js
  21:1   error  Expected indentation of 2 spaces but found 4  indent
  21:27  error  Extra semicolon                               semi

✖ 2 problems (2 errors, 0 warnings)
  2 errors and 0 warnings potentially fixable with the `--fix` option.
```

## Tips

Genom att köra testet, ett så kallat enhetstest, som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt enhetstestet...).

Funktioner, metoder, etc. som kan komma till användning beroende hur du väljer att lösa uppgiften:

- [funktionsuttryck](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
- [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
