var models          = require('../lib/models');
var characters      = require('../lib/models/fixtures/characters.json');

models.Character.sync({force: true})
.then(function () {
    characters.forEach(function(character) {
        return models.Character.create(character);
    })
})