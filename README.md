# Opis projektu `ts-rollup`

Projekt dostarcza gotowy, skonfigurowany zestaw narzędzi:

- [Rollup.js](https://rollupjs.org/guide)
- [TypeScript](https://www.typescriptlang.org)
- [Mocha](https://mochajs.org)
- Server developerski ([NPM](https://www.npmjs.com/package/serve), [GitHub](https://github.com/zeit/serve))



# Narzędzia developerskie



## Zadania

- `npm run rollup:build` buduje plik dla przeglądarki internetowej `./web/bundle.iife.js`
- `npm run rollup:watch` uruchamia tryb czuwaj i buduj dla `rollup:build`
- `npm run rollup:test` buduje plik z testami dla przeglądarki `./web/test.iife.js`
- `npm run ts:build` konwertuje pliki `*.ts` z folderu `./source` do plików `*.js` i `*.d.ts` i zapisuje w folderze `./dist` _(buduje pliki zgodne z systemem modułów Node.js)_
- `npm run ts:watch` uruchamia tryb czuwaj i buduj dla `ts:build`
- `npm run test` lub `npm test` uruchamia testy z wykorzystaniem framework'a [Mocha](https://mochajs.org)
- `npm run test:watch` tryb czuwaj i testuj dla `npm run test`
- `npm run server` uruchamia serwer deweloperski pod adresem http://127.0.0.1:8080
- `npm run clear` usuwa z projektu wszystkie pliki które można zbudować powyższymi poleceniami
- `npm run release` przeprowadza testy i buduje pliki gotowe do dystrybucji na produkcję



## Testy jednostkowe

Do testowania służą dwa polecenia:

1. `npm test` uruchamia testy jednostkowe w środowisku [Node.js](https://nodejs.org) przy pomocy  framework'a [Mocha](https://mochajs.org)
2. `npm run rollup:test` buduje testy jednostkowe dla przeglądarki, aby je uruchomić trzeba:
   1. Włączyć serwer poleceniem `npm run server`
   2. Otworzyć adres http://127.0.0.1:8080/web/test w przeglądarce internetowej
   3. Odczytać wynik testów i GOTOWE :)



## Przydatne linki:

 - https://github.com/rollup/rollup-starter-lib/tree/typescript
 - https://github.com/mochajs/mocha-examples/tree/master/packages/typescript



-----

Adrian Gargula (Adrosar)  → [BitBucket](https://bitbucket.org/Adrosar/) | [GitHub](https://github.com/Adrosar) | [npm](https://www.npmjs.com/~adrosar)