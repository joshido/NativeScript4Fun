var observable = require('data/observable');

var viewModel = new observable.Observable();

viewModel.name = '';
viewModel.message = 'Hello';

exports.viewModel = viewModel;