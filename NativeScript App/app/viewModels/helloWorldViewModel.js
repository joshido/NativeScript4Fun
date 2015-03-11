var observable = require("data/observable");
var frames = require("ui/frame");

var viewModel = new observable.Observable();
viewModel.set("name", "");
viewModel.set("message", "Hello World!");
viewModel.tapAction = function () {
    frames.topmost().navigate('app/views/weather');
};
exports.viewModel = viewModel;
