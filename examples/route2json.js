var fs = require('fs');
// var routeJson = require('/home/admin/npm/repos/LeafletPlayback/examples/testdata/new-route.json');

//  Linux
// var dir = '/home/admin/npm/repos/LeafletPlayback/examples/testdata';
// var dirOutput = '/home/admin/npm/repos/LeafletPlayback/examples/outputdata';

//  Windows
var dir = 'D:/ISD/projects/Simulation/repos/LeafletPlayback/examples/testdata';
var dirOutput = 'D:/ISD/projects/Simulation/repos/LeafletPlayback/examples/outputdata';

fs.readdirSync(dir).forEach(function (file) {

    var geojsonOutput = {
        type: 'Feature',
        geometry: {
            type: 'MultiPoint',
            coordinates: []
        },
        properties: {
            title: 'newRoute',
            path_options: { 'color': 'red' },
            time: [],
            speed: [],
            altitude: [],
            heading: [],
            horizontal_accuracy: [],
            vertical_accuracy: []
        },
        bbox: [
            [
                30.43725,
                18.03433
            ],
            [
                30.43725,
                19.10038
            ],
            [
                30.9876,
                19.10038
            ],
            [
                30.9876,
                18.03433
            ]
        ]
    };

    var routeJson = require(dir + '/' + file);

    var routePoints = [];

    routePoints = routeJson.features;
    console.log('Route Points: ' + routePoints.length);

    //geojsonOutput.bbox = routeJson.bbox;
    //console.log('Route BBOX  : ' + routeJson.bbox);

    //geojsonOutput.crs = routeJson.crs;
    //console.log('Route CRS   : ' + routeJson.crs.properties.name);
    // console.log('Route CRS: ' + JSON.stringify(routeJson.crs));

    for (var i = 0; i < routePoints.length; i++) {
        var point = routePoints[i];

        var pos = point.geometry.coordinates;
        geojsonOutput.geometry.coordinates[i] = pos[0];

        var prop = geojsonOutput.properties;
        prop.time[i] = new Date(point.properties.time).getTime();
        prop.speed[i] = 60;
        prop.altitude[i] = point.properties.ele;

        prop.heading[i] = 0;
        prop.horizontal_accuracy[i] = 0;
        prop.vertical_accuracy[i] = 0;
    }

    //console.log('Route Output: ' + JSON.stringify(geojsonOutput.properties));

    fs.writeFile(dirOutput + '/' + file, JSON.stringify(geojsonOutput, null, 2), function (err) {
        if (err) {
            console.log('unable to write file: ' + err);
        } else {
            console.log('file converted successfully');
        }
    });

});
