# Münster Mesh

🌐 Website für die Meshtastic Community im Münsterland

## Was ist dies?

Diese Website dient als zentrale Anlaufstelle für die Münster Mesh Community - ein dezentrales Mesh-Netzwerk basierend auf Meshtastic im Münsterland.

## Features

- 📱 Responsive Design (funktioniert auf allen Geräten)
- 🎨 Modernes, sauberes Design
- 📝 Informationen über Meshtastic
- 🗺️ Karte der Mesh-Knoten im Münsterland
- 🚀 Optimiert für GitHub Pages

## Deployment auf GitHub Pages

### Schritt 1: Repository erstellen

1. Erstelle ein neues GitHub Repository namens `muenstermesh` (oder einen anderen Namen)
2. Pushe diesen Code zum Repository:

```bash
cd /Users/thor/git/muenstermesh
git init
git add .
git commit -m "Initial commit: Münster Mesh website"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/muenstermesh.git
git push -u origin main
```

### Schritt 2: GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (Einstellungen)
3. Scrolle zur **Pages** Sektion im linken Menü
4. Unter **Source** wähle:
   - Branch: `main`
   - Folder: `/ (root)`
5. Klicke auf **Save**

### Schritt 3: Website aufrufen

Nach wenigen Minuten ist deine Website verfügbar unter:
```
https://DEIN-USERNAME.github.io/muenstermesh/
```

## Eigene Domain verwenden (optional)

Falls du eine eigene Domain verwenden möchtest:

1. Erstelle eine Datei `CNAME` im Root-Verzeichnis mit deiner Domain:
   ```
   muenster-mesh.de
   ```

2. Konfiguriere bei deinem Domain-Anbieter einen CNAME-Record:
   ```
   CNAME  @  DEIN-USERNAME.github.io
   ```

3. Warte auf DNS-Propagierung (kann bis zu 24h dauern)

## Inhalte anpassen

### HTML bearbeiten
Die Hauptinhalte befinden sich in `index.html`. Du kannst die Texte, Links und Inhalte direkt dort anpassen.

### Styling anpassen
Alle Styles sind in `css/style.css` definiert. Passe Farben, Schriftarten und Layout nach Belieben an.

### JavaScript anpassen
Interaktive Funktionen findest du in `js/main.js`.

## Markdown Content (optional)

Das System unterstützt auch Markdown-basierte Inhalte. Siehe `content/` Ordner für Beispiele.

## Struktur

```
muenstermesh/
├── index.html          # Hauptseite
├── css/
│   └── style.css      # Styling
├── js/
│   └── main.js        # JavaScript
├── content/           # Markdown-Inhalte (optional)
│   ├── meshtastic.md
│   └── karte.md
├── README.md          # Diese Datei
└── .gitignore        # Git ignore Datei
```

## Map Integration

Um eine echte Karte zu integrieren, kannst du:

1. **Leaflet.js** verwenden:
   ```html
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
   <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
   ```

2. **Meshtastic Map API** nutzen (falls verfügbar)

3. **OpenStreetMap** mit benutzerdefinierten Markern

## Mitwirken

Möchtest du zur Website beitragen?

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## Lizenz

Dieses Projekt ist Open Source und steht unter der MIT Lizenz.

## Links

- [Meshtastic Official Website](https://meshtastic.org)
- [Meshtastic Documentation](https://meshtastic.org/docs)
- [Meshtastic GitHub](https://github.com/meshtastic)

## Kontakt

Für Fragen und Anregungen:
- 💬 Community Chat: [Link einfügen]
- 📧 Email: info@muenster-mesh.de (Beispiel)
- 🐙 GitHub Issues: [Link einfügen]

---

Erstellt mit ❤️ von der Münster Mesh Community
