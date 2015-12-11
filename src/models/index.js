fs      = require('fs');
path    = require('path');

for(var file in fs.readdirSync(__dirname)){
    var name = path.basename(file, '.js');
    if(path.extname(file) == '.js' && name != 'index'){
        name = name[0].toUpperCase() + name.slice(1)
        model = require  __dirname + '/' + file
        Promise.promisifyAll model
        Promise.promisifyAll model.prototype
        module.exports[name] = model
    }
}