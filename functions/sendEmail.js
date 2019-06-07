// const SparkPost = require('sparkpost')
// const client = new SparkPost()

exports.handler = function(event, context, callback) {
  const { name, email, message } = JSON.parse(event.body)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept'
  }
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(true),
      headers
    })
  }
  send()

  // const sendEmail = () => {
  //   client.transmissions
  //     .send({
  //       options: {
  //         sandbox: false
  //       },
  //       content: {
  //         from: 'jalenparham@mail.jalenparham.com',
  //         subject: 'Hello, World!',
  //         html: `<html>
  //             <body>
  //               <p>Testing SparkPost - the world's most awesomest email service!</p>
  //               <p>${mail.name}</p>
  //               <p>${mail.email}</p>
  //               <p>${mail.message}</p>
  //             </body>
  //           </html>`
  //       },
  //       recipients: [{ address: 'jalenparham97@gmail.com' }]
  //     })
  //     .then(data => {
  //       console.log('Woohoo! You just sent your first mailing!')
  //       console.log(data)
  //       console.log(mail)
  //       send('Message Sent')
  //     })
  //     .catch(err => {
  //       console.log('Whoops! Something went wrong')
  //       console.log(err)
  //       send(err)
  //     })

  // send(event.body)

  console.log({ name, email, message })
}

// if (event.httpMethod === 'POST') {
//   sendEmail()
// }
