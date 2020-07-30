require("dotenv").config()

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  CONTACT_NUMBERS,
  BOT_NUMBER,
  BOT_MESSAGE,
} = process.env

const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

exports.handler = function (event, context, callback) {
  Promise.all(
    // split the string of several messages into single numbers
    // send message to each of them
    CONTACT_NUMBERS.split(";").map((num) => {
      return client.messages.create({
        from: BOT_NUMBER,
        to: num,
        body: BOT_MESSAGE,
      })
    })
  )
    .then(() => callback(null, { statusCode: 200, body: "Created" }))
    .catch((e) => {
      console.log(e)
      callback(e)
    })
}
