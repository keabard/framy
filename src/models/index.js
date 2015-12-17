fs      = require('fs');
path    = require('path');

for(var file in fs.readdirSync(__dirname)){
    var name = path.basename(file, '.js');
    if(path.extname(file) == '.js' && name != 'index'){
        var name = name[0].toUpperCase() + name.slice(1);
        var model = require(__dirname + '/' + file);
        module.exports[name] = model;
    }
}