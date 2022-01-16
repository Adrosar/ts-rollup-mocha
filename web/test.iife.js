(function () {
    'use strict';

    var Boo = /** @class */ (function () {
        function Boo() {
            this.type = "Boo";
        }
        return Boo;
    }());

    describe("Klasa Boo", function () {
        it("`Boo` ma być konstruktorem", function () {
            if (typeof Boo !== "function") {
                throw new Error();
            }
        });
        var boo = new Boo();
        it("`boo` powinno być obiektem", function () {
            if (typeof boo !== "object") {
                throw new Error();
            }
        });
        it("`boo` powinno mieć pole `type` o wartości 'Boo'", function () {
            if (boo.type !== "Boo") {
                throw new Error();
            }
        });
    });

    function foo(a, b) {
        return a + b;
    }

    describe("Funkcja `foo`", function () {
        it("`foo` ma być funkcją ", function () {
            if (typeof foo !== "function") {
                throw new Error();
            }
        });
        it("Wywołanie `foo(1,2)` ma zwrócić 3", function () {
            if (foo(1, 2) !== 3) {
                throw new Error();
            }
        });
    });

})();
