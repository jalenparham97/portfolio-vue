const sgMail = require('@sendgrid/mail')
const SENDGRID_API_KEY =
  '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'

exports.handler = function(event, context, callback) {
  const { name, email, message } = event.body

  sgMail.setApiKey(SENDGRID_API_KEY)

  const msg = {
    to: 'jalenparham97@gmail.com',
    from: email,
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<ul>
       <li>Name: ${name}</li>
       <li>Message: ${message}</li>
    </ul>`
  }

  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    })
  }

  const sendEmail = () => {}

  if (event.httpMethod === 'POST') {
    // sgMail.send(msg).then(() => send('Message Sent')).catch(err => send(err))
    sendEmail()
      .then(() => send('Message Sent'))
      .catch(err => send(err))
  }
}
