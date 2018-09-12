
exports.handler = function(event, context, callback) {
    let date = (new Date()).getDay()
    // Days of the week
    let djsDays = [
        2,4,5
    ]

    const hereMessages = [
        "DJ should be here (unless otherwise specified). Check his desk!",
        "DJ is probably here. Check his desk!",
        "DJ's schedule says he'd be in.",
        "Sources tell me he's in, but you should double check. (Little birdies are notoriously hard to understand.)",
    ]
    const awayMessages = [
        "DJ is probably snoozing in a hammock somewhere far away.",
        "DJ is probably NOT here!",
        "DJ might be planning his next dive, try again tomorrow.",
        "If DJ is here, something must be going terribly wrong...",
    ]
    const msgs = djsDays.includes(date) ? hereMessages : awayMessages;

    const msg =  msgs[Math.round(Math.random() * (msgs.length-1))]

    callback(null, {
        "isBase64Encoded": false,
        "statusCode": 200,
        "headers": {},
        "body": msg,
    });
   // or
   // callback("some error type");
}