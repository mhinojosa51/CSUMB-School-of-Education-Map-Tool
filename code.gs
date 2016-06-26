/* Load in HTML page */

function doGet() {
    return HtmlService.createHtmlOutputFromFile('csumbMap')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}



function getLatLangData() {
    /* pulls location data from the Google Spreadsheet listed below and returns the data to our front-end javascript */
    var sheet = SpreadsheetApp.openById('1aEXAuakPZQ4dVJpE0e3oieI4lBhktWiFgKOWAHB_TfU');

    var locations = [];


    var data = sheet.getDataRange();
    var values = data.getValues();

    for (var i = 1; i < values.length; i++) {
        var latLong = values[i][1].split(',');

        var coordinates = { lat: Number(latLong[0]), lng: Number(latLong[1]) };
        var title = values[i][0];

        locations.push([title, coordinates]);


    }

    return locations;

}