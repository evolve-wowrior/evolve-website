export async function loadContent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to load ${filePath}`);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(error);
        document.getElementById(elementId).innerHTML =
            "<p>Content failed to load.</p>";
    }
}