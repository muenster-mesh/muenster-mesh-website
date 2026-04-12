# Münster Mesh - Quick Start

## ✅ Was wurde erstellt?

Deine Münster Mesh Website ist jetzt fertig! Hier ist ein Überblick:

### 📁 Dateistruktur

```
muenstermesh/
├── index.html              # Hauptseite mit allen Sections
├── markdown-viewer.html    # Markdown-Content-Viewer (optional)
│
├── css/
│   ├── style.css          # Hauptstyles
│   └── markdown.css       # Styles für Markdown-Content
│
├── js/
│   ├── main.js            # Hauptfunktionen (Navigation, etc.)
│   └── markdown-viewer.js # Markdown-Rendering
│
├── content/
│   ├── meshtastic.md      # Detaillierte Meshtastic-Infos
│   └── karte.md           # Karten-Informationen
│
├── README.md              # Projekt-Dokumentation
├── DEPLOYMENT.md          # Deployment-Anleitung
└── .gitignore            # Git-Ignore-Datei
```

### ✨ Features

✅ Vollständig responsive (Mobile, Tablet, Desktop)
✅ Section "Was ist Meshtastic?" mit detaillierten Infos
✅ Section "Karte Münsterland" (bereit für Integration)
✅ Modernes, sauberes Design
✅ Markdown-Support für einfache Inhaltspflege
✅ GitHub Pages ready
✅ Git-Repository initialisiert
✅ SEO-freundlich

## 🚀 Nächste Schritte

### 1. Website lokal testen

Öffne einfach die `index.html` in deinem Browser:

```bash
# Option 1: Im Browser öffnen
open index.html

# Option 2: Mit Python Server (empfohlen für Markdown-Viewer)
python3 -m http.server 8000
# Dann öffne: http://localhost:8000
```

### 2. Auf GitHub veröffentlichen

Folge der Anleitung in `DEPLOYMENT.md`:

```bash
# Erstelle ein Repository auf github.com
# Dann:
git remote add origin https://github.com/DEIN-USERNAME/muenstermesh.git
git branch -M main
git push -u origin main
```

### 3. GitHub Pages aktivieren

1. Gehe zu Repository Settings → Pages
2. Source: Branch `main`, Folder `/ (root)`
3. Save!

Deine Website ist dann unter:
`https://DEIN-USERNAME.github.io/muenstermesh/`

## 🎨 Anpassungen

### Farben ändern

In `css/style.css` findest du die Farbvariablen:

```css
:root {
    --primary-color: #2c5f2d;      /* Hauptfarbe (Grün) */
    --secondary-color: #97bc62;     /* Sekundärfarbe (Hellgrün) */
    --accent-color: #4a90e2;        /* Akzentfarbe (Blau) */
}
```

### Texte ändern

- **Hauptseite:** Bearbeite `index.html`
- **Markdown-Content:** Bearbeite Dateien in `content/`

### Eigenes Logo hinzufügen

1. Speichere dein Logo in einem `images/` Ordner
2. Im `<header>` in `index.html`:

```html
<h1>
    <img src="images/logo.png" alt="Münster Mesh Logo" style="height: 50px;">
    Münster Mesh
</h1>
```

## 🗺️ Karte integrieren

### Option 1: Leaflet.js (empfohlen)

Füge in `index.html` im `<head>` ein:

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
```

Ersetze `.map-placeholder` in `index.html` mit:

```html
<div id="map" style="height: 500px;"></div>
```

Füge in `js/main.js` hinzu:

```javascript
// Karte initialisieren
const map = L.map('map').setView([51.9607, 7.6261], 11); // Münster Koordinaten

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Marker hinzufügen
L.marker([51.9607, 7.6261]).addTo(map)
    .bindPopup('Münster Innenstadt');
```

### Option 2: Google Maps

Siehe Google Maps API Dokumentation für Integration.

## 📱 Social Media Links hinzufügen

Im Footer oder "Mitmachen"-Section in `index.html`:

```html
<div class="social-links">
    <a href="https://discord.gg/DEIN-SERVER" target="_blank">
        💬 Discord
    </a>
    <a href="https://matrix.to/#/DEIN-RAUM" target="_blank">
        📱 Matrix
    </a>
    <a href="mailto:kontakt@muenster-mesh.de">
        📧 Email
    </a>
</div>
```

## 🔧 Wartung

### Neue Inhalte hinzufügen

1. Bearbeite die Dateien
2. Committe die Änderungen:

```bash
git add .
git commit -m "Update: Beschreibung der Änderung"
git push
```

3. Änderungen sind nach 1-2 Minuten live!

### Neue Markdown-Seite hinzufügen

1. Erstelle `content/neue-seite.md`
2. Füge Link in Navigation hinzu
3. Aufrufbar unter: `markdown-viewer.html?page=neue-seite`

## 📊 Analytics (optional)

Falls du Website-Statistiken möchtest:

### Google Analytics

Füge vor `</head>` in `index.html` ein:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Plausible Analytics (Privacy-friendly)

```html
<script defer data-domain="muenster-mesh.de" 
        src="https://plausible.io/js/script.js"></script>
```

## 💡 Weitere Ideen

- [ ] Forum oder Kommentarfunktion hinzufügen
- [ ] Meshtastic-Konfigurationstool integrieren
- [ ] Live-Netzwerk-Status anzeigen
- [ ] Event-Kalender für Treffen
- [ ] Hardware-Kaufguide mit Affiliate-Links
- [ ] Blog für Updates und Tutorials
- [ ] Mehrsprachigkeit (Deutsch/Englisch)

## 🆘 Hilfe

- **README.md:** Vollständige Dokumentation
- **DEPLOYMENT.md:** Deployment-Details
- **GitHub Issues:** Für Bugs und Features

## 📞 Kontakt

Aktualisiere die Kontaktdaten in `index.html`:

- Discord/Matrix Links
- E-Mail-Adresse
- GitHub-Organisation

---

**Viel Erfolg mit Münster Mesh! 🌐**

_Die Community freut sich auf dich!_
