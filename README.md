# Münster Mesh

🌐 Website für die Meshtastic Community im Münsterland — built with [Hugo](https://gohugo.io).

## Quickstart

### Voraussetzungen

- [Hugo](https://gohugo.io/installation/) (extended edition, v0.160+)
- [Git](https://git-scm.com/)

### Lokal entwickeln

```bash
# Repository klonen
git clone https://github.com/yourusername/muenstermesh.git
cd muenstermesh

# Hugo Development Server starten
hugo server -D

# Website öffnen unter http://localhost:1313/muenstermesh/
```

### Build

```bash
hugo --minify
# Ausgabe in ./public/
```

## Projektstruktur

```
muenstermesh/
├── .github/workflows/
│   └── hugo.yml              # GitHub Actions: Auto-Deploy
├── content/
│   ├── _index.md             # Homepage metadata
│   └── sections/             # Sektionen der Startseite (Markdown!)
│       ├── home.md           # Hero / Willkommen
│       ├── meshtastic.md     # Was ist Meshtastic?
│       ├── karte.md          # Karte Münsterland
│       └── mitmachen.md      # Mitmachen
├── layouts/
│   ├── _default/
│   │   ├── baseof.html       # Base Layout
│   │   ├── index.html        # Homepage Template
│   │   ├── single.html       # Einzelseiten Template
│   │   └── list.html         # Listen Template
│   ├── partials/
│   │   ├── header.html       # Kopfbereich
│   │   ├── nav.html          # Navigation
│   │   └── footer.html       # Fußbereich
│   └── shortcodes/           # Wiederverwendbare Komponenten
├── static/
│   ├── css/style.css         # Stylesheet
│   └── js/main.js            # JavaScript
├── hugo.toml                 # Hugo-Konfiguration
└── README.md
```

## Inhalte bearbeiten

Alle Inhalte werden als **Markdown-Dateien** in `content/sections/` gepflegt:

| Datei | Sektion |
|---|---|
| `home.md` | Willkommens-Hero |
| `meshtastic.md` | Was ist Meshtastic? |
| `karte.md` | Karte Münsterland |
| `mitmachen.md` | Mitmachen |

### Neue Sektion hinzufügen

1. Erstelle eine neue Datei in `content/sections/`:

```markdown
---
title: "Meine neue Sektion"
weight: 5
sectionId: "neue-sektion"
sectionClass: ""
---

Hier kommt der Inhalt in Markdown...
```

2. Füge einen Menüeintrag in `hugo.toml` hinzu:

```toml
[[menu.main]]
  name = "Neue Sektion"
  url = "#neue-sektion"
  weight = 5
```

## Deployment (GitHub Pages)

Das Deployment läuft **automatisch** via GitHub Actions:

1. Erstelle ein Repository auf GitHub
2. Pushe den Code:
   ```bash
   git remote add origin https://github.com/DEIN-USERNAME/muenstermesh.git
   git push -u origin main
   ```
3. Gehe zu **Settings → Pages**
4. Unter **Source** wähle: **GitHub Actions**
5. Die Website ist nach dem ersten Push automatisch live unter:
   `https://DEIN-USERNAME.github.io/muenstermesh/`

> **Wichtig:** In den Pages-Settings muss als Source "GitHub Actions" ausgewählt sein (nicht "Deploy from a branch").

## Konfiguration

Alle Einstellungen in `hugo.toml`:

```toml
baseURL = "https://yourusername.github.io/muenstermesh/"  # Deine URL
title = "Münster Mesh"                                     # Site-Titel

[params]
  tagline = "Dezentrales Mesh-Netzwerk im Münsterland"
  email = "info@muenster-mesh.de"
  github = "https://github.com/yourusername/muenstermesh"
```

## Links

- [Meshtastic](https://meshtastic.org)
- [Hugo Documentation](https://gohugo.io/documentation/)
- [GitHub Pages](https://docs.github.com/en/pages)

---

Erstellt mit ❤️ von der Münster Mesh Community
