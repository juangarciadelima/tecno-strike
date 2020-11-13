import axios from 'axios'

const config = {
    baseURL : 'http://tecno-start-api.herokuapp.com/v1/api',
    timeout : 3000,
}
export const apiPrivada = axios.create(config)
export const apiPublica = axios.create(config)


apiPrivada.interceptors.request.use(request =>{
  request.headers = {
      Authorization : localStorage.getItem('token')
  }
   return request
})

