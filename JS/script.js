const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const toggleButton = document.querySelector(".sidebar__toggle");
const sidebar = document.querySelector(".sidebar");
const journeyToggles = document.querySelectorAll(".timeline-item__toggle");
const themeStorageKey = "portfolio-theme";

const sections = navLinks
  .map((link) => {
    const href = link.getAttribute("href");
    return href && href.startsWith("#") ? document.querySelector(href) : null;
  })
  .filter(Boolean);

function setActiveLinkByPage() {
  if (!navLinks.length) return;

  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;

    const linkPath = new URL(href, window.location.href).pathname;
    link.classList.toggle("active", linkPath === currentPath);
  });
}

function setActiveLinkByScroll() {
  if (!sections.length) return;

  const scrollPosition = window.scrollY + window.innerHeight / 3;

  sections.forEach((section) => {
    const id = `#${section.id}`;
    const link = navLinks.find((l) => l.getAttribute("href") === id);
    if (!link) return;

    const { offsetTop, offsetHeight } = section;
    const isActive =
      scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;

    link.classList.toggle("active", isActive);
  });
}

function closeSidebar() {
  sidebar?.classList.remove("open");
}

function toggleSidebar() {
  sidebar?.classList.toggle("open");
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
}

function getPreferredTheme() {
  const savedTheme = localStorage.getItem(themeStorageKey);
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function renderThemeToggleLabel(button, theme) {
  if (!button) return;

  button.setAttribute(
    "aria-label",
    theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"
  );
  button.innerHTML = `
    <span class="theme-toggle__dot" aria-hidden="true"></span>
    <span>${theme === "dark" ? "Thème sombre" : "Thème clair"}</span>
  `;
}

function ensureThemeToggle() {
  const container = document.querySelector(".sidebar__actions");
  if (!container) return;

  let themeToggle = container.querySelector(".theme-toggle");

  if (!themeToggle) {
    themeToggle = document.createElement("button");
    themeToggle.type = "button";
    themeToggle.className = "theme-toggle";
    container.prepend(themeToggle);
  }

  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);
  renderThemeToggleLabel(themeToggle, initialTheme);

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(themeStorageKey, nextTheme);
    renderThemeToggleLabel(themeToggle, nextTheme);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href) return;

    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
      closeSidebar();
      return;
    }

    closeSidebar();
  });
});

window.addEventListener("scroll", () => {
  window.requestAnimationFrame(setActiveLinkByScroll);
});

if (toggleButton) {
  toggleButton.addEventListener("click", toggleSidebar);
}

function syncAboutCardsHeight() {
  const grid = document.querySelector(".about__grid");
  const wide = document.querySelector(".about__wide");
  if (!grid || !wide) return;

  const cards = Array.from(grid.querySelectorAll("article")).filter(
    (article) => !article.classList.contains("about__wide")
  );

  wide.style.minHeight = "";

  if (window.innerWidth <= 900) return;

  const maxHeight = Math.max(...cards.map((card) => card.offsetHeight));
  if (!maxHeight) return;

  wide.style.minHeight = `${maxHeight}px`;
}

document.addEventListener("DOMContentLoaded", () => {
  ensureThemeToggle();
  setActiveLinkByPage();
  setActiveLinkByScroll();
  syncAboutCardsHeight();

  requestAnimationFrame(syncAboutCardsHeight);
  setTimeout(syncAboutCardsHeight, 100);
  setTimeout(syncAboutCardsHeight, 300);
});

window.addEventListener("load", () => {
  syncAboutCardsHeight();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeSidebar();

  syncAboutCardsHeight();
});

journeyToggles.forEach((toggle) => {
  const panelId = toggle.getAttribute("aria-controls");
  const panel = panelId ? document.getElementById(panelId) : null;
  if (!panel) return;

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    panel.hidden = isExpanded;
  });
});
