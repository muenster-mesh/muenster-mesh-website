# GitHub Pages Deployment Guide

## Schnellstart

Diese Anleitung hilft dir, die Münster Mesh Website auf GitHub Pages zu veröffentlichen.

## Voraussetzungen

- Git installiert auf deinem Computer
- GitHub Account
- Terminal/Command Line Zugriff

## Schritt-für-Schritt Anleitung

### 1. Repository auf GitHub erstellen

1. Gehe zu [github.com](https://github.com)
2. Klicke auf das **+** Symbol oben rechts
3. Wähle **New repository**
4. Repository-Name: `muenstermesh` (oder ein anderer Name)
5. Beschreibung: "Münster Mesh - Meshtastic Community Website"
6. Wähle **Public** (für GitHub Pages erforderlich bei kostenlosen Accounts)
7. **NICHT** "Initialize with README" auswählen (wir haben schon eins!)
8. Klicke **Create repository**

### 2. Lokales Repository mit GitHub verbinden

Öffne ein Terminal im Projektordner und führe folgende Befehle aus:

```bash
# Navigiere zum Projekt-Verzeichnis
cd /Users/thor/git/muenstermesh

# Git Repository initialisieren (falls noch nicht geschehen)
git init

# Alle Dateien zum Staging hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: Münster Mesh website"

# Hauptbranch umbenennen (moderne Git-Konvention)
git branch -M main

# Remote Repository hinzufügen (ersetze DEIN-USERNAME!)
git remote add origin https://github.com/DEIN-USERNAME/muenstermesh.git

# Push zum GitHub Repository
git push -u origin main
```

**Wichtig:** Ersetze `DEIN-USERNAME` mit deinem GitHub-Benutzernamen!

### 3. GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (Zahnrad-Symbol)
3. Scrolle im linken Menü zu **Pages**
4. Unter **Source**:
   - Branch: **main**
   - Folder: **/ (root)**
5. Klicke auf **Save**
6. Warte 1-2 Minuten

### 4. Website aufrufen

Deine Website ist jetzt verfügbar unter:
```
https://DEIN-USERNAME.github.io/muenstermesh/
```

GitHub zeigt dir die URL auch oben auf der Pages-Einstellungsseite an.

## Eigene Domain verwenden (Optional)

### Voraussetzungen
- Eine eigene Domain (z.B. `muenster-mesh.de`)
- Zugriff auf DNS-Einstellungen deiner Domain

### Schritte

#### 1. CNAME-Datei erstellen
Erstelle eine Datei namens `CNAME` (ohne Endung) im Root-Verzeichnis:

```bash
echo "muenster-mesh.de" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

#### 2. DNS konfigurieren

Bei deinem Domain-Anbieter (z.B. Strato, 1&1, etc.):

**Option A: Apex Domain (muenster-mesh.de):**
```
A Record:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Option B: Subdomain (www.muenster-mesh.de):**
```
CNAME Record:
www  DEIN-USERNAME.github.io
```

#### 3. In GitHub Pages konfigurieren
1. Gehe zu **Settings** → **Pages**
2. Trage deine Domain ein: `muenster-mesh.de`
3. Warte auf DNS-Propagierung (kann bis zu 24h dauern)
4. Aktiviere **Enforce HTTPS** (nach Propagierung)

## Updates veröffentlichen

Nach Änderungen an der Website:

```bash
# Änderungen anzeigen
git status

# Alle Änderungen hinzufügen
git add .

# Commit mit Beschreibung
git commit -m "Update: Beschreibung deiner Änderungen"

# Zu GitHub pushen
git push
```

Die Website wird automatisch nach dem Push aktualisiert (dauert 1-2 Minuten).

## Troubleshooting

### Website zeigt 404 Error
- Warte 2-3 Minuten nach Aktivierung
- Prüfe ob GitHub Pages aktiviert ist
- Prüfe ob `index.html` im Root-Verzeichnis liegt

### CSS/JS lädt nicht
- Prüfe die Pfade in `index.html`
- Relative Pfade verwenden: `css/style.css` statt `/css/style.css`

### Änderungen sind nicht sichtbar
- Cache leeren: Strg+Shift+R (Windows) oder Cmd+Shift+R (Mac)
- Warte 1-2 Minuten nach dem Push
- Prüfe ob der Push erfolgreich war: `git log`

### Custom Domain funktioniert nicht
- DNS-Propagierung kann bis zu 24h dauern
- Prüfe DNS-Einträge mit: `nslookup muenster-mesh.de`
- CNAME-Datei muss im Repository sein

## Erweiterte Features

### GitHub Actions (CI/CD)
Du kannst GitHub Actions nutzen um:
- Automatische Tests durchzuführen
- Markdown zu HTML zu kompilieren
- Bilder zu optimieren
- Dependencies zu aktualisieren

### Branch Protection
Schütze den main-Branch:
1. Settings → Branches
2. Add rule für `main`
3. "Require pull request reviews" aktivieren

### GitHub Issues
Nutze Issues für:
- Bug Reports
- Feature Requests
- Diskussionen über Inhalte

## Weitere Ressourcen

- [GitHub Pages Dokumentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions](https://docs.github.com/en/actions)

## Support

Bei Fragen zur Website:
- GitHub Issues: Erstelle ein Issue im Repository
- Community: Frag in der Community
- Dokumentation: Siehe README.md

---

Viel Erfolg beim Deployment! 🚀
