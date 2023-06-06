import Axios from 'axios'

const address_api = Axios.create({
  method: 'POST',
  withCredentials: false,
  baseURL:
    process.env.REACT_APP_DADATA_URL + '4_1/rs/suggest/address',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Token ' + process.env.REACT_APP_DADATA_API_KEY,
    mode: 'cors',
  },
})

export { address_api }
