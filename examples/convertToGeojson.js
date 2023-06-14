var fs = require('fs');
var dir = '/home/admin/npm/repos/LeafletPlayback/examples/testdata';
var jsonJsFilePath = '/home/admin/npm/repos/LeafletPlayback/examples/geojson/new-route.js';
var jsonFilePath = '/home/admin/npm/repos/LeafletPlayback/examples/geojson/new-route.geojson';



// fs.readdirSync('./geojson').forEach(function (file) {
fs.readdirSync(dir).forEach(function (file) {
  
  // var geoloqi = require('./geojson/' + file);
  var geoloqi = require(dir + '/' + file);

  // var geoloqi = require(dir + '/' + 'new-route.js');
  // var geoloqi = require(dir + '/' + 'new-route.geojson');

  //  var geoloqi = require(jsonFilePath);
  //var geojsonFile = require(jsonFilePath);

  try {
    var geoObject = JSON.parse(geoloqi);
    var features = [];

    console.log(geoObject.features.length);
  }
  catch (error) {
    console.log('Error parsing JSON:', error, geoloqi); /*✔️ Friendly message for debugging ! */
  }


  // var geojsonObject = JSON.parse(geojsonFile);
 
  // var features1 = geojsonObject.features;
  // var featuresCount = geojsonObject.features.length;

  // console.log(Object.prototype.toString.call(geojsonObject.features[0]));

  // console.log(featuresCount);
  // console.log(geojsonObject.features.length);

});
// var geoObject = JSON.parse(geoloqi);
// var features = [];

// features = geoObject.features;

// console.log(geoloqi);

//   var geojson = {
//     type: 'Feature',
//     geometry: {
//       type: 'MultiPoint',
//       coordinates: []
//     },
//     properties: {
//       time: [],
//       speed: [],
//       altitude: [],
//       // heading: [],
//       // horizontal_accuracy: [],
//       // vertical_accuracy: [],
//       // raw: []
//     },
//     bbox: []
//   };

//   // geojson.bbox[0] = [geoloqi.bounds.sw.longitude, geoloqi.bounds.sw.latitude];
//   // geojson.bbox[1] = [geoloqi.bounds.sw.longitude, geoloqi.bounds.ne.latitude];
//   // geojson.bbox[2] = [geoloqi.bounds.ne.longitude, geoloqi.bounds.ne.latitude];
//   // geojson.bbox[3] = [geoloqi.bounds.ne.longitude, geoloqi.bounds.sw.latitude];

// var geoObject = JSON.parse(geoloqi);

// geojson.bbox = geoloqi.bbox;
  


//   var points = geoloqi.features;
//   var len = geoloqi.features.count();

//   for(var i=0;i<len;i++){
//     var point = points[i];

//     var pos = point.geometry.coordinates;
//     geojson.geometry.coordinates[i] = pos[0];

//     var prop = geojson.properties;
//     prop.time[i] = new Date(point.properties.time).getTime();
//     prop.speed[i] = 60;
//     prop.altitude[i] = point.properties.ele;
//     // prop.heading[i] = 0;
//     // prop.horizontal_accuracy[i] = 0;
//     // prop.vertical_accuracy[i] = 0;
//   }

//   fs.writeFile('./geojson/' + file , JSON.stringify(geojson,null,2), function(err){
//     if (err) {
//       console.log('unable to write file: ' + err);
//     } else {
//       console.log('success');
//     }
//   });
// // });
