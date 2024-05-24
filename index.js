const emailError = document.getElementById("emailError");
const btn = document.getElementById("btn");
const iconError = document.querySelector(".icon_error");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (valid()) {
    return true;
  }
});

function valid() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Please provide a valid email";
    iconError.style.display = "block";
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Please provide a valid email";
    return false;
  }
  emailError.innerHTML = "";
  iconError.style.display = "none";
  return true;
}
