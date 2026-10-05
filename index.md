---
layout: default
title: Münster Mesh
---

<section id="muenster-mesh">
<h2>Münster Mesh</h2>
<div class="content-box" markdown="1">

Wir bauen ein offenes, dezentrales Mesh-Netzwerk im Münsterland auf Basis von **MeshCore**.
Unabhängig von Internet und Mobilfunk können wir über große Entfernungen kommunizieren — mit intelligentem Routing und minimaler Latenz.

</div>
</section>

<section id="meshcore">
<h2>MeshCore</h2>
<div class="content-box" markdown="1">

**MeshCore** ist eine Open-Source-Firmware für LoRa-Funkgeräte, die ein leistungsfähiges dezentrales Mesh-Netzwerk ermöglicht. MeshCore setzt auf ein schlankes, effizientes Protokoll mit Fokus auf zuverlässiges Routing und niedrigen Overhead.

### Hauptmerkmale

- **Offline-fähig:** Verschickt Kurznachrichten komplett ohne Internet oder Mobilfunknetz
- **Lange Reichweite:** LoRa-Technologie ermöglicht Kommunikation über mehrere Kilometer — bis zu 10+ km in der Stadt, 50+ km auf dem Land
- **Mesh-Routing:** Nachrichten werden intelligent über das gesamte Netz weitergeleitet.
- **Rooms:** Gruppenkommunikation über sog. Room Server
- **Geringer Stromverbrauch:** Batterielaufzeit von Tagen bis Wochen, einfach unabhängig vom Stromnetz betreibbar
- **Verschlüsselt:** Sichere Kommunikation zwischen den Knoten
- **Solar Repeater:** Weiterleitung von Nachrichten über Solarpanel-betriebene Repeater - Protokoll erlaubt bis zu 64 Hops und damit extrem große Reichweite
- **Open Source:** Freie Software und offene Hardware-Designs

### Anwendungsfälle

- Kommunikation bei Outdoor-Aktivitäten (Wandern, Radfahren)
- Notfallkommunikation bei Katastrophen
- Community-Netzwerke in der Stadt und auf dem Land
- IoT-Sensoren und Telemetrie
- Experimente mit Funktechnologie und Mesh-Routing

</div>
</section>

<section id="karte">
<h2>Karte Münster-Mesh</h2>
<div class="content-box" markdown="1">

Auf dieser Karte siehst du alle MeshCore-Knoten, die im Münsterland und darüber hinaus aktiv sind.
Jeder Punkt steht für einen Knoten oder Repeater, die gemeinsam das MeshCore-Netz in Münster bilden.

<div id="map-container">
    <iframe
        src="https://map.meshcore.io/?zoom=12&amp;lat=51.9612&amp;lon=7.6254"
        title="MeshCore-Knotenkarte Münsterland"
        width="100%"
        height="600"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen></iframe>
</div>

</div>
</section>

<section id="mitmachen">
<h2>Mitmachen</h2>
<div class="content-box" markdown="1">

### So kannst du Teil des Münster Mesh werden

1. **Hardware besorgen:** Kaufe ein kompatibles LoRa-Board (siehe [Hardware](#hardware))
2. **Firmware flashen:** Installiere die [MeshCore-Firmware](https://github.com/ripplebiz/MeshCore) auf deinem Gerät
3. **Konfigurieren:** Stelle die Region auf **EU868** und wähle einen Knotennamen
4. **Aufstellen:** Platziere dein Gerät an einem erhöhten Ort für beste Reichweite
5. **Vernetzen:** Tritt unserer Community bei und tausche dich aus

</div>
</section>

<section id="hardware">
<h2>Hardware</h2>
<div class="content-box" markdown="1">

MeshCore läuft auf kostengünstigen LoRa-Boards wie:

<div class="hardware-grid">
    <div class="hardware-card">
        <img src="{{ '/assets/images/t1000-e.jpg' | relative_url }}" alt="T1000-E">
        <p><strong><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html" target="_blank">T1000-E</a></strong>
        <span class="hardware-details">• Wasserdichter, dünner Node mit Batterie
        <br>• MeshCore-Modul fürs Smartphone
        <br>• ca. 40€</span>
        </p>
    </div>
    <div class="hardware-card">
        <img src="{{ '/assets/images/t-deck.jpg' | relative_url }}" alt="T-Deck">
        <p><strong><a href="https://lilygo.cc/products/t-deck" target="_blank">T-Deck</a></strong>
        <span class="hardware-details">• Vollwertiges Gerät mit Tastatur und Display
        <br>• Unabhängiger Betrieb ohne Smartphone
        <br>• ca. 90€</span>
        </p>
    </div>
    <div class="hardware-card">
        <img src="{{ '/assets/images/solar-node.jpg' | relative_url }}" alt="Solar Node P1-Pro">
        <p><strong><a href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html" target="_blank">Solar Node P1-Pro</a></strong>
        <span class="hardware-details">• Solarbetriebener Outdoor-Repeater
        <br>• Empfangsverstärker an Balkon oder Dach
        <br>• ca. 100€</span>
        </p>
    </div>
</div>

<p class="note">Mehr Infos zur Hardware-Auswahl: <a href="https://hansemesh.de/geraete/" target="_blank">hansemesh.de/geraete</a></p>

</div>
</section>
