import React from 'react';

var TestComponent = function (_a) {
    var text = _a.text;
    return React.createElement("div", null, text ? text : 'Test Component');
};

export { TestComponent };
