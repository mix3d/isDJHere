
exports.myHandler = function(event, context, callback) {
    let date = (new Date()).getDay();
    // Days of the week
    let djsDays = [
        2,4,5
    ]
    let isDJHere = djsDays.includes(date)

    callback(null, `DJ is probably ${!isDJHere ? 'NOT' : ''} here!`);
   // or 
   // callback("some error type");
}