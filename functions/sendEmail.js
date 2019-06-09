const SparkPost = require('sparkpost')
const client = new SparkPost('590366d1b42155cce4d68bcbb39bacd41be8ecab')

exports.handler = (event, context, callback) => {
  const { name, email, message } = JSON.parse(event.body)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept'
  }

  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body),
      headers
    })
  }

  const html = `<html>
                  <body>
                    <p>Testing Sending Emails with netlify functions using Sparkpost</p>
                    <p>${name}</p>
                    <p>${email}</p>
                    <p>${message}</p>
                  </body>
                </html>`

  const sendEmail = () => {
    client.transmissions
      .send({
        options: {
          sandbox: false
        },
        content: {
          from: 'jalenparham@mail.jalenparham.com',
          subject: `Message from my website`,
          html
        },
        recipients: [{ address: 'jalenparham97@gmail.com' }]
      })
      .then(() => {
        send(true)
      })
      .catch(err => {
        send(err)
      })
  }

  if (event.httpMethod === 'POST') {
    sendEmail()
  }
}
