"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boo = void 0;
const boo_1 = require("./boo");
const foo_1 = require("./foo");
const boo = new boo_1.Boo();
exports.boo = boo;
console.log("->", boo.type);
console.log("->", (0, foo_1.foo)(1, 2));
