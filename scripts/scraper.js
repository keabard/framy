var _                   = require('lodash');
var GoogleSpreadsheet   = require('google-spreadsheet');
var models              = require('../models');

'http://watissf.dantarion.com/sf5/boxdox/stats/RSD'

const BETA_SHEET_ID = '1976rt8B91PqVCeYJAmcnW1uwVJ0H03QJtV-dJC5ohL8';
const CREDENTIALS = require('../Framy-d9194bf37da0.json');
const MOVES_NAMES_CORR_TABLE = {
    'stand LP': 'LP',
    'stand MP': 'MP',
    'stand HP': 'HP',
    'crouch LP': '2HP',
    'crouch MP': '2HP',
    'crouch HP': '2HP',
    'stand LK': 'LK',
    'stand MK': 'MK',
    'stand HK': 'HK',
    'crouch LK': '2LK',
    'crouch MK': '2MK',
    'crouch HK': '2HK'
}

var beta_sheet = new GoogleSpreadsheet(BETA_SHEET_ID);

beta_sheet.useServiceAccountAuth(CREDENTIALS, function(err){
    beta_sheet.getInfo(function(err, infos){
        beta3_worksheets = _.filter(infos.worksheets, function(worksheet){
            return worksheet.title.endsWith('3');
        });
        beta3_worksheets.forEach(beta3_worksheet => {
            beta3_worksheet.getCells({'min-col':1, 'max-col':10, 'min-row':1, 'max-row':19, 'return-empty': true}, function(err, rows){
                
                // models.move.create({
                //     name: 
                // })
            })
        })
    });
});
