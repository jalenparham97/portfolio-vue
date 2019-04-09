const sgMail = require('@sendgrid/mail')

exports.handler = function(event, context, callback) {
  const { name } = JSON.parse(event.body)

  // callback(null, {
  //   statusCode: 200,
  //   body: 'Hello ' + name
  // })
}

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'test@example.com',
//   from: 'test@example.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>'
// }
// sgMail.send(msg)
