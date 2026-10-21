---
layout: default
title: Münster-Mesh
---

<section id="muenster-mesh">
<h2>Münster-Mesh</h2>
<div class="content-box" markdown="1">

Wir bauen ein offenes, dezentrales Mesh-Netzwerk im Münsterland auf Basis von **MeshCore**.
Unabhängig von Internet und Mobilfunk können wir über große Entfernungen kommunizieren — mit intelligentem Routing und minimaler Latenz.

### Links zur Community im Münsterland

- [forum.mcml.info](https://forum.mcml.info/) - Community-Forum für MeshCore im Münsterland
- [dk0mu.de](http://www.dk0mu.de/category/db0mu/mesh/) - Infos zu den wichtigsten Repeatern im Münsterland
- [matrix.org](https://matrix.to/#/!FWCCuRYPnKCzmJThmb:matrix.org) - Chat-Room der Münsterländer Community
- [funkmesh.de](https://funkmesh.de/) - Verein zum Bau eines ausfallsicheren Mesh-Funknetzes, Standort Billerbeck
- [sites.google.com/radiostation-do2en](https://sites.google.com/view/radiostation-do2en/meshcom-meshcore) - Stationsberichte vom Repeater in Ostbevern

</div>
</section>

<section id="meshcore">
<h2>Was ist MeshCore?</h2>
<div class="content-box" markdown="1">

**MeshCore** ist ein freies Funknetz, das ein ausfallsicheres versenden von Kurznachrichten ermöglicht. Siehe weitere Infos unter [FAQ](#faq).

### Vorteile

- **Offline-fähig:** Verschickt Kurznachrichten komplett ohne Internet oder Mobilfunknetz.
- **Große Reichweite:** Durch LoRa-Funktechnik und Mesh-Weiterleitung ermöglicht Kommunikation über mehrere hundert Kilometer.
- **Unabhängig vom Stromnetz:** Nachrichten werden über [Solar-Repeater](#solar-repeater) weitergeleitet. Damit ist Meshcore unabhängig vom Stromnetz.
- **Geringer Stromverbrauch:** Endgeräte haben lange Batterielaufzeit, und lassen sich von einfachen USB-Powerbanks laden oder betreiben.
- **Sichere Kommunikation:** Die MeshCore-Kurznachrichten sind signiert und verschlüsselt.
- **Kostenlos** Bis auf Hardware-Kosten für einen LoRa-Empfänger (ab 20 EUR, siehe [Hardware](#hardware)) ist MeshCore komplett kostenlos.

### Anwendungsfälle

- **Großveranstaltungen wie Festivals und Sportevents**: unabhängig von überlasteten Mobilfunknetzen
- **Outdoor-Aktivitäten** (Wandern, Radfahren): Funklöcher sind kein Problem
- **Bei Ausfall von Strom oder Internet**: dank Solar-Repeater und Endgeräten mit Batterie

</div>
</section>

{% include faq.html %}

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

### So kannst du Teil des Münster Meshs werden

1. **Hardware besorgen:** Kaufe ein kompatibles LoRa-Board, siehe [Hardware](#hardware).
2. **Firmware flashen:** Installiere die [MeshCore-Firmware](https://flasher.meshcore.io/) auf deinem Gerät.
3. **Konfigurieren:** Stelle die Region auf **EU/UK (narrow)** und wähle einen Namen für dein Gerät.
4. **Aufstellen:** Platziere dein Gerät an einem erhöhten Ort oder Fenster für beste Reichweite.
5. **Vernetzen:** Tritt unserer Community bei und tausche dich aus.

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
    <div class="hardware-card" id="solar-repeater">
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
