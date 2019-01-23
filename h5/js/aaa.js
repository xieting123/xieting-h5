let pwd = document.getElementById('password').value
httpRequest({
  method: 'post',
  url: 'addUser',
  data: {
    age: '20'
  }
})