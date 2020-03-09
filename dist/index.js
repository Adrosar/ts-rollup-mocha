"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boo_1 = require("./boo");
const foo_1 = require("./foo");
const boo = new boo_1.Boo();
console.log("->", boo.type);
console.log("->", foo_1.foo(1, 2));
