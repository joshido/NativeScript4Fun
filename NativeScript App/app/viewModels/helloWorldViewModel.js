var observable = require("data/observable");

var viewModel = new observable.Observable();

viewModel.set("name", "");
viewModel.set("message", "Hello World!");

viewModel.tapAction = function() {
    viewModel.set("message", "Button clicked!");
};

exports.viewModel = viewModel;