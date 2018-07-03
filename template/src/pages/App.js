"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var withQueryString_1 = require("../hocs/withQueryString");
var TestHistory_1 = require("./TestHistory");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            name: 'xgs',
            age: 25
        };
        return _this;
    }
    App.prototype.render = function () {
        return (<div>
        {this.state.name} {this.state.age}, App!
        {this.props.searchParams.token}
        <react_router_dom_1.Link to="/login" href="/login">go to login</react_router_dom_1.Link>
        <TestHistory_1["default"] searchParams={{ token: 3 }}/>
      </div>);
    };
    return App;
}(React.Component));
exports["default"] = withQueryString_1["default"](App);
