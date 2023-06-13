"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneWithoutLoc;

var _cloneNode = require("./cloneNode");

function cloneWithoutLoc(node) {
  return (0, _cloneNode.default)(node, false, true);
}