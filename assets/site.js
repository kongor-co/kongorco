const currentPath = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("[data-nav]").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPath || (currentPath === "" && href === "index.html")) {
    link.setAttribute("aria-current", "page");
  }
});

const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Date().getFullYear();
}
