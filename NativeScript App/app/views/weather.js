var vmModule = require("./../viewModels/weatherViewModel");

function pageLoaded(args){
	var page = args.object;
	page.bindingContext = vmModule.viewModel;
}

exports.pageLoaded = pageLoaded;