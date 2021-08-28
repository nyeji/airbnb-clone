const loginBtn = document.querySelector(".login-btn");
console.log(loginBtn);
const co = document.querySelector(".co");
console.log("co:", co);
console.log("co.classList:", co.classList);
const cowrapper = document.querySelector(".cowrapper");
console.log(cowrapper);

loginBtn.addEventListener("click", function() {
  co.classList.add("co_active");
  cowrapper.classList.add("co_active");
});
cowrapper.addEventListener("click", () => {
  co.classList.remove("co_active");
  cowrapper.classList.remove("co_active");
});
