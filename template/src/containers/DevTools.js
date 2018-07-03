"use strict";
exports.__esModule = true;
var react_1 = require("react");
var redux_devtools_1 = require("redux-devtools");
var redux_devtools_log_monitor_1 = require("redux-devtools-log-monitor");
var redux_devtools_dock_monitor_1 = require("redux-devtools-dock-monitor");
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
exports["default"] = redux_devtools_1.createDevTools(<redux_devtools_dock_monitor_1["default"] toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-w">
    <redux_devtools_log_monitor_1["default"] />
  </redux_devtools_dock_monitor_1["default"]>);
