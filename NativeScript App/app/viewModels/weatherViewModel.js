var observable = require("data/observable");
var locationModule = require("location/location");
var xmlModule = require("xml/xml");
var http = require("http/http");

var viewModel = new observable.Observable();
var locationManager = new locationModule.LocationManager();
var location = locationManager.lastKnownLocation;

var significantTexts = [];

/*var onEventCallback = function (event) {
    switch (event.eventType) {
        case xmlModule.ParserEventType.StartElement:
            var message = event.eventType + " " + event.elementName;
            if (event.attributes) {
                message += ", Attributes:";
                for (var attributeName in event.attributes) {
                    if (event.attributes.hasOwnProperty(attributeName)) {
                        message += " " + attributeName + "=\"" + event.attributes[attributeName] + "\"";
                    }
                }
            }
            break;
        case xmlModule.ParserEventType.EndElement:
            break;
        case xmlModule.ParserEventType.Text:
            var significantText = event.data.trim();
            if (significantText !== "") {
                significantTexts.push(significantText);
            }
            break;
    }
};
var onErrorCallback = function (error) {
    console.log("Error: " + error.message);
};
var xmlParser = new xmlModule.XmlParser(onEventCallback, onErrorCallback);
*/
viewModel.location = location;

viewModel.getForecastAction = function() {
    http.getString("http://api.yr.no/weatherapi/locationforecast/1.9/?lat=" + location.latitude +";lon=" + location.longitude)
        .then(function(resp){
            /*xmlParser.parse(resp);
            alert('parsing done');
            viewModel.set('forecast', significantTexts);*/
            viewModel.set('forecast', resp);
        }, function(ex){
            alert("Failed with: " + ex.message);
        });
};

exports.viewModel = viewModel;