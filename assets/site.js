const root = document.documentElement;
const storedTheme = localStorage.getItem("theme");
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const requestedTheme = new URLSearchParams(window.location.search).get("theme");
const initialTheme = requestedTheme === "dark" || requestedTheme === "light"
  ? requestedTheme
  : storedTheme || (preferredDark ? "dark" : "light");

root.dataset.theme = initialTheme;

const currentPath = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("[data-nav]").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPath || (currentPath === "" && href === "index.html")) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
  const syncLabel = () => {
    button.textContent = root.dataset.theme === "dark" ? "Light" : "Dark";
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
