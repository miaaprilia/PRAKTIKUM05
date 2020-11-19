const cardChat = document.querySelector(".card-chat");
const btn = document.querySelector(" .send");
const msg = document.querySelector(".input-message");

btn.addEventListener("click", function () {
  cardChat.innerHTML = cardChat.innerHTML + "<br>" + msg.value;
  msg.value = "";
});
