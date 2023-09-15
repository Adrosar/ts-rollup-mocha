# Opis projektu `ts-rollup`

Projekt dostarcza gotowy, skonfigurowany zestaw narzędzi:

- [Rollup.js](https://rollupjs.org/guide)
- [TypeScript](https://www.typescriptlang.org)
- [Mocha](https://mochajs.org)
- [http-server](https://github.com/http-party/http-server)



## Polecenia

- `npm run app` uruchamia aplikację w środowisku Node.js _(zalecam ominąć **npm** i użyć `node .`)_
- `npm run rollup:build` buduje paczkę dla przeglądarki internetowej `./web/bundle.iife.js`
- `npm run rollup:watch` uruchamia tryb czuwaj i buduj dla `rollup:build`
- `npm run rollup:test` buduje paczkę z testami dla przeglądarki `./web/test.iife.js`
- `npm run ts:build` konwertuje pliki `*.ts` z folderu `./source` do plików `*.js` i `*.d.ts` oraz zapisuje w folderze `./dist` _(buduje pliki zgodne z systemem modułów Node.js)_
- `npm run ts:watch` uruchamia tryb czuwaj i buduj dla `ts:build`
- `npm run test` lub `npm test` uruchamia testy z wykorzystaniem framework'a [Mocha](https://mochajs.org)
- `npm run test:watch` tryb czuwaj i testuj dla `npm run test`
- `npm run server` uruchamia serwer deweloperski pod adresem http://127.0.0.1:8080
- `npm run clear` czyści repozytrium z plików tymczasowych
- `npm run release` przeprowadza testy i buduje pliki gotowe do dystrybucji na produkcję



## Foldery

- `assets` biblioteki i inne zasoby firm trzecich
- `dist` pliki dystrybucyjne dla **Node.js**
- `public` pliki HTML, CSS, JS i inne dla przeglądarki WWW niepodlegające procesowi budowania
- `source` pliki źródłowe w języku TypeScript
- `temp` tymczasowe pliki nieprzechowywane w repozytrium
- `test` testy jednostkowe napisane w języku TypeScript
- `web` pliki dystrybucyjne dla **przeglądarki WWW** powstałe w procesie budowania



## Testy jednostkowe

Do testowania służą dwa polecenia:

1. `npm test` uruchamia testy jednostkowe w środowisku [Node.js](https://nodejs.org) przy pomocy  framework'a [Mocha](https://mochajs.org)
2. `npm run rollup:test` buduje testy jednostkowe dla przeglądarki, aby je uruchomić trzeba:
   1. Włączyć serwer poleceniem `npm run server`
   2. Otworzyć adres http://127.0.0.1:8080/public/test.html w przeglądarce internetowej
   3. Odczytać wynik testów i GOTOWE :)



-----

Adrian Gargula (Adrosar)  → [BitBucket](https://bitbucket.org/Adrosar/) | [GitHub](https://github.com/Adrosar) | [npm](https://www.npmjs.com/~adrosar)