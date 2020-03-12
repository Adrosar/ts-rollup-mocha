import { Boo } from "./boo";
import { foo } from "./foo";

const boo = new Boo();

console.log("->", boo.type);
console.log("->", foo(1, 2));