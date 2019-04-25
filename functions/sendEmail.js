const sgMail = require('@sendgrid/mail')
const SENDGRID_API_KEY = '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'
const axios = require('axios')

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

  const sendEmail = () => {
    axios({
      method: 'POST',
      url: 'https://api.sendgrid.com/v3/mail/send',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearor ${SENDGRID_API_KEY}`
      },
      data: '{"personalizations":[{"to":[{"email":"jalenparham97@gmail.com","name":"John Doe"}],"subject":"Hello, World!"}],"content": [{"type": "text/plain", "value": "Heya!"}],"from":{"email":"sam.smith@example.com","name":"Sam Smith"},"reply_to":{"email":"sam.smith@example.com","name":"Sam Smith"}}'
    })
  }

  if (event.httpMethod === 'POST') {
    // sgMail.send(msg).then(() => send('Message Sent')).catch(err => send(err))
    sendEmail().then(() => send('Message Sent')).catch(err => send(err))
  }
}
