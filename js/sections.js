import { loadContent } from "./content-loader.js";

export async function loadSections() {
    const sections = [
        { id: "hero-section", path: "./html/hero-section.html" },
        { id: "challenges-section", path: "./html/challenges-section.html" },
        { id: "framework-section", path: "./html/framework-section.html" },
        { id: "capabilities-section", path: "./html/capabilities-section.html" },
        { id: "projects-section", path: "./html/projects-section.html" },
        { id: "team-section", path: "./html/team-section.html" },
        { id: "contact-section", path: "./html/contact-section.html" }
    ];

    const container = document.getElementById("section-container");
    if (!container) return;

    const promises = sections.map(({ id, path }) => {
        const div = document.createElement("div");
        div.id = id;
        container.appendChild(div);
        return loadContent(id, path);
    });

    return Promise.all(promises);
}