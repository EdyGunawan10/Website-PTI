// ---------- DARK MODE ----------
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

// Load mode on refresh
window.onload = () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
};


// ---------- ANIMATION ON SCROLL ----------
const animatedElements = document.querySelectorAll(".fade-in, .slide-in");

function showOnScroll() {
  animatedElements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);


// ---------- TEMPLATE FOR BAB PAGES ----------
function generateBabTemplate(title, icon) {
  return `
  <section class="content fade-in">
      <h1>${title}</h1>

      <h2 data-icon="${icon}">Pengertian</h2>
      <p>Isi pengertian bab ini...</p>

      <h2 data-icon="${icon}">Tujuan</h2>
      <p>Isi tujuan bab ini...</p>

      <h2 data-icon="${icon}">Pembahasan</h2>
      <p>Isi pembahasan...</p>

      <h2 data-icon="${icon}">Kesimpulan</h2>
      <p>Isi kesimpulan...</p>
  </section>
  `;
}
