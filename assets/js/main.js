//Hidden pasword
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//Login
    let loginButton = document.querySelector('#loginButton');

    loginButton.onclick = (e) => {
      e.preventDefault();
      let user = document.querySelector('#user');
      let password = document.querySelector('#password')
      
      if(user.value.length == 0 || password.value.length == 0)
        return Swal.fire('Debe llenar usuario y contraseña');

      if(user.value != 'admin' && password.value != 'admin')
       return Swal.fire('¡Usuario y/o contraseña incorrectos!');

      Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: 'Será enviado a la pagina principal',
        timer: 1000
      }).then(res => {
        document.location = 'pages/search.html'
      });
    }
  
    document.querySelector('#showPassInput').onclick = (e) => {
      let password = document.querySelector('#password');
      password.type = 'password';
      if(e.srcElement.checked)
        password.type = 'text';
    }