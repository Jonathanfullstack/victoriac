(function () {
  var photos = window.PORTFOLIO_PHOTOS || [];
  var grid = document.getElementById("portfolio-grid");
  var modal = document.getElementById("photo-modal");
  var modalImage = document.getElementById("modal-image");
  var modalTitle = document.getElementById("modal-title");
  var modalCategory = document.getElementById("modal-category");
  var modalDescription = document.getElementById("modal-description");
  var modalClose = document.getElementById("modal-close");
  function renderGrid() {
    if (!grid) return;
    grid.innerHTML = photos
      .map(function (photo, i) {
        var delay = 4 + (i % 6);
        return (
          '<article class="portfolio-item cursor-pointer card-lift rounded-xl page-fade-in page-delay-' +
          delay +
          '" data-id="' +
          photo.id +
          '">' +
          '<div class="portfolio-image-wrap aspect-[4/5] bg-stone-200 rounded-xl">' +
          '<img src="' +
          (photo.image || "") +
          '" alt="' +
          (photo.title || "") +
          '" class="w-full h-full object-cover" loading="lazy" onerror="this.parentElement.style.background=\'#e7e5e4\'; this.alt=\'Imagem: ' +
          (photo.title || "") +
          "';\">" +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    grid.querySelectorAll(".portfolio-item").forEach(function (el) {
      el.addEventListener("click", function () {
        var id = parseInt(el.getAttribute("data-id"), 10);
        var photo = photos.find(function (p) {
          return p.id === id;
        });
        if (photo) openModal(photo);
      });
    });
  }

  function openModal(photo) {
    if (!modal || !photo) return;
    modalImage.src = photo.image || "";
    modalImage.alt = photo.title || "";
    modalTitle.textContent = photo.title || "";
    modalCategory.textContent = photo.category || "";
    modalDescription.textContent = photo.description || "";
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  renderGrid();
})();
