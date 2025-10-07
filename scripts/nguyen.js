window.addEventListener(
  "load",
  function () {
    setTimeout(loadEverything, 300);
    setTimeout(loadWidgets, 2000);

    const lilnoun = document.getElementById("lilnoun");
    const nftBadge = document.getElementById("nft-badge-widget");
    if (lilnoun && nftBadge) {
      lilnoun.addEventListener("click", function () {
        lilnoun.classList.add("animate__animated", "animate__hinge");
        nftBadge.classList.add("animate__animated", "animate__fadeOutDown");
        lilnoun.addEventListener("animationend", () => {
          lilnoun.classList.add("animate__fadeIn");
          nftBadge.classList.add("animate__fadeInUp");
          lilnoun.classList.remove("animate__hinge");
          nftBadge.classList.remove("animate__fadeOutDown");
        });
      });
    }
  },
  false
);

function loadEverything() {
  if (!document.body) return;
  document.body.style.opacity = "0.0";
  document.body.style.visibility = "visible";
  document.body.classList.add("animate__animated", "animate__fadeIn");
  document.body.addEventListener("animationend", () => {
    document.body.style.opacity = "1.0";
  });
}

function loadWidgets() {
  const placeholderWidget = document.getElementById("placeholder-widget");
  if (placeholderWidget) {
    placeholderWidget.style.visibility = "hidden";
  }

  const weatherWidget = document.getElementById("weather-widget");
  if (weatherWidget) {
    weatherWidget.style.visibility = "visible";
    weatherWidget.addEventListener("click", function () {
      // Do something one day
    });
  }
}
