# Münster-Mesh

🌐 Website für die MeshCore Community im Münsterland — built with [Jekyll](https://jekyllrb.com) on GitHub Pages.

## Deployment

Kein Build-Pipeline nötig! GitHub Pages baut Jekyll automatisch.

1. `main` nach GitHub pushen
2. **Settings → Pages → Source:** "Deploy from a branch" → `main` / `/ (root)`
3. Die Seite erscheint unter `https://<username>.github.io/muenstermesh/`

### Lokal testen (optional)

Am einfachsten mit Docker — keine Ruby-Installation nötig:

```bash
docker compose up
# → http://localhost:4000/muenstermesh/
```

Live-Reload ist aktiv: Änderungen an den Quelldateien werden automatisch neu gebaut.
Nach Änderungen am `Gemfile` einmal neu bauen mit `docker compose up --build`.


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
