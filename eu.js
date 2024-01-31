function entrar() {
    const nomeUsuario = document.getElementById("nomeUsuario").value;
    console.log(nomeUsuario);
    if(nomeUsuario) {
        localStorage.setItem("nomeUsuario", nomeUsuario);
        window.location = "oi.html";
    }
  }
  function logout() {
     localStorage.removeItem("nomeUsuario", nomrUsuario);

     localStorage.removeItem("nomeSala")
     location = "grefty.html";
    }