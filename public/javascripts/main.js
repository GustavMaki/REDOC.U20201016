var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyt35p1SiFUhVcYH'}).base('appw9OO3eoSUmoKdt');

base('Receipt Log').select({
    // Selecting the first 3 records in Main View:
    maxRecords: 3,
    view: "Main View"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Short Description'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});