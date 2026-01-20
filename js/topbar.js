import { loadContent } from "./content-loader.js";

export async function loadTopbar() {
    await loadContent("topbar", "./html/topbar.html");

    const topbar = document.querySelector("#topbar .topbar");
    if (!topbar) return;

    window.addEventListener("scroll", () => {
        topbar.classList.toggle("topbar--scrolled", window.scrollY > 10);
    });
}