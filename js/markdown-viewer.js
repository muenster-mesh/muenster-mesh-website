// Get the page parameter from URL
function getPageParameter() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('page') || 'meshtastic';
}

// Load and render markdown content
async function loadMarkdownContent(page) {
    const contentArea = document.getElementById('content-area');
    
    try {
        // Fetch the markdown file
        const response = await fetch(`content/${page}.md`);
        
        if (!response.ok) {
            throw new Error('Content not found');
        }
        
        const markdown = await response.text();
        
        // Convert markdown to HTML using marked.js
        const html = marked.parse(markdown);
        
        // Display the converted HTML
        contentArea.innerHTML = html;
        
    } catch (error) {
        contentArea.innerHTML = `
            <div class="note" style="background-color: #ffe6e6; border-left-color: #ff4444;">
                <h3>❌ Fehler beim Laden des Inhalts</h3>
                <p>Die angeforderte Seite konnte nicht geladen werden.</p>
                <p><a href="index.html">Zurück zur Hauptseite</a></p>
            </div>
        `;
        console.error('Error loading markdown:', error);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const page = getPageParameter();
    loadMarkdownContent(page);
    
    console.log(`Loading markdown content: ${page}`);
});
