# Münster Mesh

🌐 Website für die MeshCore Community im Münsterland — built with [Jekyll](https://jekyllrb.com) on GitHub Pages.

## Deployment

Kein Build-Pipeline nötig! GitHub Pages baut Jekyll automatisch.

1. Repository auf GitHub pushen
2. **Settings → Pages → Source:** "Deploy from a branch" → `main` / `/ (root)`
3. Fertig — die Seite erscheint unter `https://<username>.github.io/muenstermesh/`

### Lokal testen (optional)

```bash
gem install bundler jekyll
bundle init
bundle add jekyll
bundle exec jekyll serve
# → http://localhost:4000/muenstermesh/
```

## Projektstruktur

```
muenstermesh/
├── _config.yml               # Jekyll-Konfiguration
├── _layouts/
│   └── default.html          # Base Layout
├── _includes/
│   ├── header.html           # Kopfbereich
│   ├── nav.html              # Navigation
│   └── footer.html           # Fußbereich
├── css/
│   └── style.css             # Stylesheet
├── js/
│   └── main.js               # JavaScript
├── index.md                  # Startseite (alle Sektionen)
└── README.md
```

## Inhalte bearbeiten

Alle Inhalte stehen direkt in `index.md` als Markdown-Sektionen mit HTML-Section-Wrappern:

- `#home` — Willkommens-Hero
- `#meshcore` — Was ist MeshCore?
- `#karte` — Karte Münsterland
- `#mitmachen` — Mitmachen

## Links

- [MeshCore](https://github.com/ripplebiz/MeshCore)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages](https://docs.github.com/en/pages)
