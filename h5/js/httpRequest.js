const baseURL = 'http://192.168.101.10:4000/'
// const baseURL = 'http://localhost:3000/'
function httpRequest (obj) {
  let {
    method = 'post',
    url,
    data,
    params = '',
 
  } = obj
  return axios({
    baseURL,
    method,
    url,
    data,
    params,
    // responseType: 'json'
    // headers:{ 'Content-Type':'application/x-www-form-urlencoded'},
  })
}