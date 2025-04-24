const btn = document.querySelector("#btn-div button");
const spinner = document.getElementById("spinner");

//show spinner on clik of See more button
btn.addEventListener("click", function (e) {
  //prevent navigation happening immediately
  e.preventDefault();

  //show spinner
  spinner.classList.remove("hidden");

  btn.style.cursor = "wait";

  //set delay
  setTimeout(() => {
    //open url in new tab
    window.open("https://github.com/Ambs04", "_blank");
    spinner.classList.add("hidden");
  }, 2000);
});
