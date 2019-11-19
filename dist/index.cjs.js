'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var TestComponent = function (_a) {
    var text = _a.text;
    return React.createElement("div", null, text ? text : 'Test Component');
};

exports.TestComponent = TestComponent;
