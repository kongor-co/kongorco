const root = document.documentElement;
const storedTheme = localStorage.getItem("theme");
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const requestedTheme = new URLSearchParams(window.location.search).get("theme");
const initialTheme = requestedTheme === "dark" || requestedTheme === "light"
  ? requestedTheme
  : storedTheme || (preferredDark ? "dark" : "light");

root.dataset.theme = initialTheme;

document.querySelectorAll("[data-site-header]").forEach((container) => {
  const base = container.dataset.base || "";
  container.innerHTML = `
    <header class="site-header">
      <nav class="nav" aria-label="Primary navigation">
        <a class="brand" href="${base}index.html"><img class="brand-logo" src="${base}assets/favicon.png" alt=""><span>kongor</span></a>
        <div class="nav-links">
          <a href="${base}index.html" data-nav>home</a>
          <a href="${base}projects.html" data-nav>projects</a>
          <a href="${base}about.html" data-nav>about</a>
          <a href="${base}contact.html" data-nav>contact</a>
        </div>
        <button class="theme-toggle" type="button" data-theme-toggle>dark</button>
      </nav>
    </header>
  `;
});

const pathParts = window.location.pathname.split("/");
const currentPath = pathParts.pop() || "index.html";
const isProjectDetail = pathParts.some((part) => part === "projects");

document.querySelectorAll("[data-nav]").forEach((link) => {
  const href = link.getAttribute("href").split("/").pop();
  if (href === currentPath || (isProjectDetail && href === "projects.html")) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
  const syncLabel = () => {
    button.textContent = root.dataset.theme === "dark" ? "light" : "lark";
    button.setAttribute("aria-label", `Switch to ${button.textContent.toLowerCase()} mode`);
  };

  syncLabel();

  button.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", root.dataset.theme);
    syncLabel();
  });
});

const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Date().getFullYear();
}
