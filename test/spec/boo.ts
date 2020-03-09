import { Boo } from "../../source/boo";

describe("Klasa Boo", () => {
    it("`Boo` ma być konstruktorem", () => {
        if (typeof Boo !== "function") {
            throw new Error();
        }
    });

    const boo = new Boo();

    it("`boo` powinno być obiektem", () => {
        if (typeof boo !== "object") {
            throw new Error();
        }
    });

    it("`boo` powinno mieć pole `type` o wartości 'Boo'", () => {
        if (boo.type !== "Boo") {
            throw new Error();
        }
    });
});