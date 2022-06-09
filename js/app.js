function addActive() {
  const current = window.location.pathname;
  const navLinks = document.querySelectorAll(".menu a").forEach((link) => {
    if (link.href.includes(`${current}`)) {
      link.classList.add("active");
    }
  });
}

function activeMenu () {
  const btn = document.getElementById("btn");
  const menu = document.getElementById('menu');

  if (btn) {
    btn.classList.toggle('isactive');
    if (menu) {
      menu.classList.toggle('toggle');
    }
  }
}

window.onload = addActive;
