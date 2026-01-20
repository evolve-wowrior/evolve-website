import { loadContent } from "./content-loader.js";

export async function loadFooter() {
    await loadContent("footer", "./html/footer.html");

    const footer = document.getElementById("footer");
    if (!footer) return;
}