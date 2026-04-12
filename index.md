---
layout: default
title: Münster Mesh
---

<section id="home" class="hero">
<h2>Willkommen bei Münster Mesh</h2>
<div class="content-box" markdown="1">

Wir bauen ein offenes, dezentrales Mesh-Netzwerk im Münsterland auf Basis von **MeshCore**. Unabhängig von Internet und Mobilfunk können wir über große Entfernungen kommunizieren — mit intelligentem Routing und minimaler Latenz.

</div>
</section>

<section id="meshcore">
<h2>Was ist MeshCore?</h2>
<div class="content-box" markdown="1">

**MeshCore** ist eine Open-Source-Firmware für LoRa-Funkgeräte, die ein leistungsfähiges dezentrales Mesh-Netzwerk ermöglicht. MeshCore setzt auf ein schlankes, effizientes Protokoll mit Fokus auf zuverlässiges Routing und niedrigen Overhead.

### Hauptmerkmale

- **Lange Reichweite:** LoRa-Technologie ermöglicht Kommunikation über mehrere Kilometer — bis zu 10+ km in der Stadt, 50+ km auf dem Land
- **Flood-basiertes Routing:** Nachrichten werden intelligent über das gesamte Netz weitergeleitet
- **Rooms:** Gruppenkommunikation über benannte Räume — einfach und flexibel
- **Geringer Stromverbrauch:** Batterielaufzeit von Tagen bis Wochen
- **Verschlüsselt:** Sichere Kommunikation zwischen den Knoten
- **Offline-fähig:** Funktioniert komplett ohne Internet oder Mobilfunknetz
- **Repeater-Modus:** Knoten können als reine Repeater für größere Netzabdeckung arbeiten
- **Open Source:** Freie Software und offene Hardware-Designs

### Anwendungsfälle

- Kommunikation bei Outdoor-Aktivitäten (Wandern, Radfahren)
- Notfallkommunikation bei Katastrophen
- Community-Netzwerke in der Stadt und auf dem Land
- IoT-Sensoren und Telemetrie
- Experimente mit Funktechnologie und Mesh-Routing

### Hardware

MeshCore läuft auf kostengünstigen ESP32-basierten LoRa-Boards wie:

- **LILYGO T-Beam** — GPS integriert, ca. 35–45 €
- **LILYGO T-Echo** — E-Ink Display, sehr energiesparend, ca. 50–60 €
- **Heltec LoRa 32** — OLED Display, kompakt, ca. 30–40 €
- **RAK WisBlock** — Modulares System, ca. 60–80 €

<p class="note">Kosten: Ab ca. 30–50 € pro Gerät. Mehr Infos auf <a href="https://github.com/ripplebiz/MeshCore" target="_blank">github.com/ripplebiz/MeshCore</a></p>

</div>
</section>

<section id="karte">
<h2>Karte Münsterland</h2>
<div class="content-box" markdown="1">

<div id="map-container">
    <div class="map-placeholder">
        <p>🗺️ Interaktive Karte der MeshCore-Knoten im Münsterland</p>
        <p class="note">Hier kann eine Karte mit den aktiven Mesh-Knoten integriert werden.<br>
            Mögliche Integrationen:</p>
        <ul>
            <li>OpenStreetMap mit benutzerdefinierten Markern</li>
            <li>Leaflet.js für interaktive Karten</li>
        </ul>
    </div>
</div>

### Abgedeckte Bereiche

- 📍 **Münster Innenstadt** — Aktiv, mehrere Knoten
- 📍 **Gievenbeck** — Aktiv, Universitätsbereich
- 📍 **Münster-Hiltrup** — Geplant
- 📍 **Telgte** — In Aufbau
- 📍 **Warendorf** — Geplant
- 📍 **Coesfeld** — Geplant
- 📍 **Steinfurt** — In Planung

### Reichweite

| Bereich | Typische Reichweite |
|---|---|
| Direkte Stadtverbindung | 2–5 km |
| Mit Hindernissen | 1–3 km |
| Erhöhte Punkte | bis 10 km |
| Ländlich, freie Sicht | 10–20 km |
| Optimale Bedingungen | bis 50 km |

<p class="note">Die Abdeckung wächst mit jedem neuen Knoten im Netzwerk!</p>

</div>
</section>

<section id="mitmachen">
<h2>Mitmachen</h2>
<div class="content-box" markdown="1">

### So kannst du Teil des Münster Mesh werden

1. **Hardware besorgen:** Kaufe ein kompatibles LoRa-Board (siehe oben)
2. **Firmware flashen:** Installiere die [MeshCore-Firmware](https://github.com/ripplebiz/MeshCore) auf deinem Gerät
3. **Konfigurieren:** Stelle die Region auf **EU868** und wähle einen Knotennamen
4. **Aufstellen:** Platziere dein Gerät an einem erhöhten Ort für beste Reichweite
5. **Vernetzen:** Tritt unserer Community bei und tausche dich aus

### Ressourcen

- 📖 [MeshCore auf GitHub](https://github.com/ripplebiz/MeshCore)
- 📱 [MeshCore Companion App](https://github.com/ripplebiz/MeshCore#companion-app)
- 💬 [MeshCore Discord](https://discord.gg/meshcore)

### Community

Vernetze dich mit anderen MeshCore-Enthusiasten im Münsterland:

- 💬 Matrix/Discord (Link einfügen)
- 📧 E-Mail: info@muenster-mesh.de
- 🐙 GitHub: [github.com/yourusername/muenstermesh](https://github.com/yourusername/muenstermesh)

</div>
</section>
