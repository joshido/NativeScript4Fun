var vmModule = require("./../viewModels/helloWorldViewModel");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.viewModel;
}
exports.pageLoaded = pageLoaded;