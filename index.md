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
<h2>MeshCore</h2>
<div class="content-box" markdown="1">

**MeshCore** ist ein freies Funknetz, das ein ausfallsicheres versenden von Kurznachrichten ermöglicht.

### Vorteile

- **Offline-fähig:** Verschickt Kurznachrichten komplett ohne Internet oder Mobilfunknetz.
- **Große Reichweite:** Durch LoRa-Funktechnik und Mesh-Weiterleitung ermöglicht Kommunikation über mehrere hundert Kilometer.
- **Unabhängig vom Stromnetz:** Nachrichten werden über sog. Repeater mit Solarpanels weitergeleitet. Damit ist Meshcore unabhängig vom Stromnetz.
- **Geringer Stromverbrauch:** Endgeräte haben Batterielaufzeit von Tagen bis Wochen, und lassen sich von einfachen USB-Powerbanks laden oder betreiben.
- **Sichere Kommunikation:** Die MeshCore-Kurznachrichten sind signiert und verschlüsselt.
- **Kostenlos** Bis auf Hardware-Kosten für einen LoRa-Empfänger (ab 20 EUR, siehe [Hardware](#hardware)) ist MeshCore komplett kostenlos.

### Anwendungsfälle

- Kommunikation bei Outdoor-Aktivitäten (Wandern, Radfahren)
- Sensoren, Telemetrie oder Anbindung an Smart-Home-Systeme
- Kommunikation selbst bei Ausfall von Strom oder Internet

</div>
</section>

<section id="faq">
<h2>FAQ</h2>
<div class="content-box faq">

<details>
<summary>Was ist ein Mesh-Netzwerk?</summary>
<p>In einem Mesh-Netzwerk sind Geräte direkt miteinander verbunden, statt über einen zentralen Server oder Funkmast zu kommunizieren. Jedes Gerät kann Nachrichten für andere weiterreichen, sodass eine Nachricht über mehrere Stationen hinweg ihr Ziel erreicht. Fällt ein Knoten aus, sucht sich die Nachricht einfach einen anderen Weg.</p>
</details>

<details>
<summary>Was ist LoRa?</summary>
<p>LoRa (Long Range) ist eine Funktechnik, die mit sehr wenig Energie kleine Datenmengen über große Entfernungen überträgt — je nach Gelände mehrere Kilometer, bei freier Sicht auch deutlich mehr. In Europa nutzt LoRa das lizenzfreie 868-MHz-Band, das jeder ohne Anmeldung oder Gebühren verwenden darf.</p>
</details>

<details>
<summary>Was unterscheidet MeshCore von Meshtastic?</summary>
<p>Beide Projekte bauen Mesh-Netze auf LoRa-Basis. Bei Meshtastic leitet grundsätzlich jedes Gerät Nachrichten weiter, was in größeren Netzen schnell zu überlasteten Funkkanälen führt. MeshCore trennt dagegen zwischen Endgeräten (Companions) und fest installierten Repeatern, die gezielt weiterleiten. Dadurch skaliert das Netz besser und Nachrichten kommen zuverlässiger an.</p>
</details>

<details>
<summary>Was brauche ich, um mitzumachen?</summary>
<p>Ein kompatibles LoRa-Gerät (siehe <a href="#hardware">Hardware</a>) und in den meisten Fällen ein Smartphone mit der MeshCore-App. Geräte wie das T-Deck mit eigener Tastatur und Display funktionieren auch ganz ohne Smartphone.</p>
</details>

<details>
<summary>Was ist der Unterschied zwischen Companion und Repeater?</summary>
<p>Ein <strong>Companion</strong> ist dein persönliches Gerät, das du per Bluetooth mit deinem Smartphone verbindest, um Nachrichten zu schreiben und zu lesen. Ein <strong>Repeater</strong> ist ein fest installierter Knoten — idealerweise an einem hohen Standort — der Nachrichten anderer weiterleitet und so die Reichweite des Netzes vergrößert.</p>
</details>

<details>
<summary>Wie weit reicht ein Gerät?</summary>
<p>Das hängt stark vom Standort ab. In der Stadt mit vielen Gebäuden sind es oft nur ein bis wenige Kilometer, von einem Dach oder Hügel mit freier Sicht können es zehn Kilometer und mehr sein. Über mehrere Repeater hinweg lassen sich so auch sehr große Entfernungen überbrücken.</p>
</details>

<details>
<summary>Kostet die Nutzung etwas?</summary>
<p>Nein. Abgesehen von der einmaligen Anschaffung der Hardware fallen keine laufenden Kosten an — kein Vertrag, keine SIM-Karte, keine Gebühren. Die MeshCore-Firmware ist freie Software.</p>
</details>

<details>
<summary>Ist das legal?</summary>
<p>Ja. MeshCore nutzt das lizenzfreie 868-MHz-Band, das in Europa für solche Anwendungen freigegeben ist. Wichtig ist, dass dein Gerät auf die Region <strong>EU868</strong> eingestellt ist, damit die erlaubten Sendeleistungen und Sendezeiten eingehalten werden.</p>
</details>

<details>
<summary>Wie sicher sind meine Nachrichten?</summary>
<p>Direktnachrichten zwischen zwei Teilnehmern sind Ende-zu-Ende-verschlüsselt und signiert, sodass nur der Empfänger sie lesen kann. Nachrichten in öffentlichen Kanälen kann dagegen jeder im Netz mitlesen — dort solltest du keine privaten Informationen teilen.</p>
</details>

<details>
<summary>Wie kann ich das Netz in Münster unterstützen?</summary>
<p>Am meisten hilft ein zusätzlicher Repeater an einem erhöhten Standort, etwa auf einem Dach oder Balkon. Aber auch jeder neue Teilnehmer mit einem Companion-Gerät belebt das Netz. Wie du einsteigst, erfährst du unter <a href="#mitmachen">Mitmachen</a>.</p>
</details>

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
