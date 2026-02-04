(function () {
  var track = document.querySelector(".carousel-track");
  var dotsContainer = document.getElementById("carousel-dots");
  var prevBtn = document.querySelector(".carousel-prev");
  var nextBtn = document.querySelector(".carousel-next");
  if (!track || !dotsContainer) return;

  var slides = track.querySelectorAll(".carousel-slide");
  var total = slides.length;
  var current = 0;
  var autoplayMs = 5000;
  var autoplayTimer = null;

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = "translateX(-" + current * 100 + "%)";
    dotsContainer.querySelectorAll("button").forEach(function (btn, i) {
      btn.classList.toggle("is-active", i === current);
    });
    resetAutoplay();
  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
  }

  function resetAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = setInterval(next, autoplayMs);
  }

  for (var i = 0; i < total; i++) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("aria-label", "Ir para foto " + (i + 1));
    btn.addEventListener(
      "click",
      (function (j) {
        return function () {
          goTo(j);
        };
      })(i)
    );
    if (i === 0) btn.classList.add("is-active");
    dotsContainer.appendChild(btn);
  }

  if (prevBtn) prevBtn.addEventListener("click", prev);
  if (nextBtn) nextBtn.addEventListener("click", next);

  resetAutoplay();
})();
