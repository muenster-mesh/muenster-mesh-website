# Was ist Meshtastic?

**Meshtastic** ist ein Open-Source-Projekt, das es ermöglicht, kostengünstige LoRa-Funkgeräte zu einem dezentralen Mesh-Netzwerk zu verbinden.

## Hauptmerkmale

### Lange Reichweite
LoRa-Technologie ermöglicht Kommunikation über mehrere Kilometer:
- **In der Stadt:** bis zu 10+ km
- **Auf dem Land:** bis zu 50+ km
- **Freie Sichtlinie:** noch größere Distanzen möglich

### Geringer Stromverbrauch
Dank der effizienten LoRa-Technologie haben Meshtastic-Geräte eine beeindruckende Batterielaufzeit:
- **Portable Geräte:** Mehrere Tage bis Wochen
- **Festinstallationen:** Mit Solarmodulen unbegrenzt

### Mesh-Technologie
Das Besondere an Meshtastic ist das Mesh-Netzwerk:
- Nachrichten werden automatisch über andere Knoten weitergeleitet
- Je mehr Teilnehmer, desto größer die Reichweite
- Selbstheilendes Netzwerk bei Ausfall einzelner Knoten

### Verschlüsselung
Sicherheit ist wichtig:
- Ende-zu-Ende-Verschlüsselung (AES256)
- Private und öffentliche Kanäle
- Optionale Positionsfreigabe

### Offline-Fähigkeit
Das Netzwerk funktioniert komplett autonom:
- Kein Internet erforderlich
- Unabhängig von Mobilfunknetzen
- Ideal für Notfälle und entlegene Gebiete

### Open Source
Freie und offene Technologie:
- Software: Apache 2.0 Lizenz
- Hardware: Offene Designs
- Community-getrieben

## Anwendungsfälle

### Outdoor-Aktivitäten
- **Wandern:** Bleibe mit deiner Gruppe in Kontakt
- **Radfahren:** Koordination bei Touren
- **Camping:** Kommunikation auf dem Campingplatz
- **Geocaching:** Verfolgung und Nachrichten

### Notfallkommunikation
- **Katastrophen:** Wenn klassische Netze ausfallen
- **Rettungsdienste:** Koordination im Gelände
- **Evakuierung:** Information und Warnung

### Community-Netzwerke
- **Stadtnetze:** Lokale Communities vernetzen
- **Nachbarschaft:** Quartiers-Kommunikation
- **Events:** Festivals und Veranstaltungen
- **Maker-Spaces:** Experimente und Projekte

### IoT & Tracking
- **Sensoren:** Temperatur, Luftfeuchtigkeit, etc.
- **GPS-Tracking:** Fahrzeuge, Haustiere
- **Umwelt-Monitoring:** Wetterstationen
- **Smart Home:** Unabhängige Steuerung

## Hardware

Meshtastic läuft auf verschiedenen ESP32-basierten LoRa-Boards:

### Beliebte Boards

#### LILYGO T-Beam
- **Vorteile:** GPS integriert, gute Reichweite
- **Preis:** ca. 35-45€
- **Ideal für:** Mobile Anwendungen, Tracking

#### LILYGO T-Echo
- **Vorteile:** E-Ink Display, sehr energiesparend
- **Preis:** ca. 50-60€
- **Ideal für:** Portable Messenger

#### Heltec LoRa 32
- **Vorteile:** OLED Display, kompakt
- **Preis:** ca. 30-40€
- **Ideal für:** Einsteiger, Experimente

#### RAK WisBlock Meshtastic Starter Kit
- **Vorteile:** Modulares System, erweiterbar
- **Preis:** ca. 60-80€
- **Ideal für:** IoT-Projekte, Sensoren

### Zubehör
- **Antenne:** Bessere Antennen verbessern die Reichweite erheblich
- **Gehäuse:** Wetterfeste Gehäuse für Außeninstallationen
- **Solar:** Solarpanels für autarke Knoten
- **Batterie:** Größere Akkus für längere Laufzeit

## Software

### Firmware
Die Meshtastic-Firmware wird regelmäßig aktualisiert:
- **Installation:** Via Web-Flasher oder Kommandozeile
- **Updates:** Over-the-Air (OTA) Updates möglich
- **Konfiguration:** Via App oder Web-Interface

### Apps
Verschiedene Apps für unterschiedliche Plattformen:
- **iOS:** Meshtastic App im App Store
- **Android:** Meshtastic App im Play Store
- **Web:** Web-Client für Browser
- **Python:** CLI für Entwickler und Tüftler

## Frequenzen

Meshtastic nutzt lizenzfreie ISM-Bänder:
- **Europa (EU868):** 868 MHz - Hier im Münsterland relevant!
- **USA:** 915 MHz
- **Andere Regionen:** Verschiedene Frequenzen

**Wichtig:** Die richtige Region muss in der Firmware konfiguriert sein!

## Los geht's!

### 5 Schritte zum ersten Meshtastic-Gerät:

1. **Board kaufen** - Besorge dir ein kompatibles LoRa-Board
2. **Firmware flashen** - Nutze den Web-Flasher auf meshtastic.org
3. **Region einstellen** - Wähle EU868 für Deutschland
4. **App installieren** - Lade die App für dein Smartphone
5. **Verbinden & Testen** - Koppel dein Gerät und sende erste Nachrichten!

### Ressourcen

- **Offizielle Dokumentation:** [meshtastic.org/docs](https://meshtastic.org/docs)
- **Discord Community:** Internationale Meshtastic-Community
- **GitHub:** [github.com/meshtastic](https://github.com/meshtastic)
- **Web Flasher:** [flasher.meshtastic.org](https://flasher.meshtastic.org)

---

Bereit, Teil des Münster Mesh zu werden? Schau dir die [Karte](#karte) an und erfahre, wo bereits Knoten aktiv sind!
