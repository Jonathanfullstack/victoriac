(function () {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  var closeBtn = document.getElementById("mobile-menu-close");
  var body = document.body;

  function openMenu() {
    if (!menu || !toggle) return;
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    if (toggle) toggle.classList.add("is-active");
    if (body) body.classList.add("mobile-menu-open");
  }

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    if (toggle) toggle.classList.remove("is-active");
    if (body) body.classList.remove("mobile-menu-open");
  }

  function toggleMenu() {
    if (menu && menu.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMenu();
    });

    if (closeBtn) closeBtn.addEventListener("click", closeMenu);

    menu.addEventListener("click", function (e) {
      if (e.target === menu) closeMenu();
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) closeMenu();
    });
  }
})();
