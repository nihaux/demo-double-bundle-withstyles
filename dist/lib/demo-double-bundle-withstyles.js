"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("@material-ui/core/List");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var DummyComponent = function (_a) {
    var items = _a.items;
    return (React.createElement(List_1.default, null, items.map(function (item) { return (React.createElement(ListItem_1.default, null,
        React.createElement(ListItemText_1.default, { primary: item }))); })));
};
exports.default = DummyComponent;
//# sourceMappingURL=demo-double-bundle-withstyles.js.map