var jsonexport = require('jsonexport');
var fs = require('fs');
 
var reader = fs.createReadStream('output_clean.json');
var writer = fs.createWriteStream('output_clean.csv');
 
reader.pipe(jsonexport()).pipe(writer);