import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001/users'
})

export default instance;