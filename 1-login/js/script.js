const username = document.querySelector("#username");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit-btn");

submit.addEventListener("click", function (event) {
  if (username.value == "" && password.value == "") {
    // f.preventDefault();
    // console.log(f);
    alert("Username / Password Tidak Boleh Kosong");
  } else if (username.value == "mia" && password.value == "123456") {
    event.preventDefault();
    window.location.replace("succes.html");
  } else {
    alert("Username/Password salah!!!!");
  }
});
