import { loadTopbar } from "./topbar.js";
import { loadSections } from "./sections.js";
import { loadFooter } from "./footer.js";

window.addEventListener("load", startApp);

async function startApp() {
    try {
        await loadTopbar();
        await loadSections();
        await loadFooter();
    } catch (error) {
        console.error("Error initializing app:", error);
    }
}