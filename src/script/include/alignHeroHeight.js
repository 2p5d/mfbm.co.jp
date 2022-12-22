// import $ from "jquery";

/* hero align height
==================================ove======================================== */
function alignHeroHeight() {
  if (document.getElementById("wpadminbar")) {
    var adminBarH = document.getElementById("wpadminbar").offsetHeight;
  } else {
    var adminBarH = 0;
  }

  const windowH = window.innerHeight;
  document.getElementById("hero").style.height = windowH - adminBarH + "px";
}

export { alignHeroHeight };
