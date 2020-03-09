import { foo } from "../../source/foo";

describe("Funkcja `foo`", () => {
    it("`foo` ma być funkcją ", () => {
        if (typeof foo !== "function") {
            throw new Error();
        }
    });

    it("Wywołanie `foo(1,2)` ma zwrócić 3", () => {
        if (foo(1, 2) !== 3) {
            throw new Error();
        }
    });
});