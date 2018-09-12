
exports.handler = function(event, context, callback) {
    let date = (new Date()).getDay();
    // Days of the week
    let djsDays = [
        2,4,5
    ]
    let isDJHere = djsDays.includes(date)

    callback(null, {
        "isBase64Encoded": false,
        "statusCode": 200,
        "headers": { },
        "body": `DJ is probably ${!isDJHere ? 'NOT' : ''} here!`
    });
   // or
   // callback("some error type");
}