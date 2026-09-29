document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var navbar = document.getElementById('site-navbar');

  if (!toggle || !navbar) {
    return;
  }

  var icon = toggle.querySelector('i');

  function setIcon(isOpen) {
    if (!icon) {
      return;
    }
    icon.classList.toggle('fa-bars', !isOpen);
    icon.classList.toggle('fa-times', isOpen);
  }

  function openMenu() {
    navbar.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    setIcon(true);
  }

  function closeMenu() {
    navbar.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    setIcon(false);
  }

  toggle.addEventListener('click', function () {
    if (navbar.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navbar.querySelectorAll('.navlink').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function (event) {
    if (!navbar.classList.contains('is-open')) {
      return;
    }
    if (!navbar.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 600) {
      closeMenu();
    }
  });
});
