const platform = navigator.platform.toLowerCase();
const ua = navigator.userAgent.toLowerCase();
const isWindows = platform.includes("win") || ua.includes("windows");

// Hero CTA: name the visitor's OS, land on the download section.
const cta = document.querySelector("[data-os-cta]");
if (cta) {
  cta.textContent = isWindows ? "Windowsに入れる" : "Macに入れる";
  cta.href = "#download";
}

// Download buttons: emphasize the visitor's OS, keep the other reachable.
const macBtn = document.querySelector("[data-dl-mac]");
const winBtn = document.querySelector("[data-dl-win]");
if (macBtn && winBtn && isWindows) {
  winBtn.classList.replace("ghost", "primary");
  macBtn.classList.replace("primary", "ghost");
  winBtn.parentElement.prepend(winBtn);
}
