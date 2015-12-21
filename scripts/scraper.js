var GoogleSpreadsheet = require('google-spreadsheet');

'http://watissf.dantarion.com/sf5/boxdox/stats/RSD'

const RASHID_SHEET_ID = '1vAojjiCPwt9NYFBGA1zwcsWQYAsV6A7jMqzZsY2bp40';
const CREDENTIALS = require('../Framy-d9194bf37da0.json')

var rashid_sheet = new GoogleSpreadsheet(RASHID_SHEET_ID);


rashid_sheet.useServiceAccountAuth(CREDENTIALS, function(err){
    rashid_sheet.getInfo(function(title, updated, author, name, email, worksheets){
        console.log(1);
        console.log(title, updated, author, name, email, worksheets);
    });

    rashid_sheet.getRows(1, {}, function(err, rows){console.log('ROWS 1');console.log(rows);});

    rashid_sheet.getCells(1, {'min-row':3, 'max-row':3, 'return-empty': true}, function(err, rows){console.log('ROWS 2');console.log(rows);});
});

