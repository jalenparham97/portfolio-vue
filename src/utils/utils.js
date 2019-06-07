import axios from 'axios'

export const sendEmail = ({ name, email, message }) => {
  return axios({
    method: 'POST',
    url: 'http://localhost:9000/sendEmail',
    data: JSON.stringify({ name, email, message })
  })
}
