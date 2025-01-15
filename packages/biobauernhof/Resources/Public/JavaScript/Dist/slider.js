// Wartet, bis das gesamte DOM geladen ist, bevor das Script ausgeführt wird
document.addEventListener("DOMContentLoaded", function () {
    // Holen der relevanten HTML-Elemente
    const band = document.getElementById('image-band');
    const prevButton = document.getElementById('band-prev');
    const nextButton = document.getElementById('band-next');

    // Überprüfen, ob alle notwendigen Elemente vorhanden sind
    if (!band || !prevButton || !nextButton) {
        console.error("Slider-Elemente nicht gefunden!");
        return;
    }

    // Variablen für die Position und Berechnungen
    let currentOffset = 0; // Aktuelle Scrollposition (Startwert ist 0)
    const items = band.querySelectorAll('.image-item');
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    const maxOffset = (items.length * itemWidth) - band.offsetWidth;

    // Debugging-Informationen für die Konsole
    console.log('Item Width:', itemWidth); // Breite eines Bildes inkl. Margin
    console.log('Max Offset:', maxOffset); // Maximale Scrollposition
    console.log('Current Offset:', currentOffset); // Aktuelle Scrollposition

    // Funktion für den "Weiter"-Button
    nextButton.addEventListener('click', function () {
        if (currentOffset < maxOffset) { // Prüfen, ob wir noch nach rechts scrollen können
            currentOffset += itemWidth; // Scrollt um die Breite eines Bildes weiter
            if (currentOffset > maxOffset) { // Begrenzen, falls die Scrollposition das Maximum überschreitet
                currentOffset = maxOffset;
            }
            band.style.transform = `translateX(-${currentOffset}px)`; // Bewegt das Band nach links
        }
    });

    // Funktion für den "Zurück"-Button
    prevButton.addEventListener('click', function () {
        if (currentOffset > 0) { // Prüfen, ob wir noch nach links scrollen können
            currentOffset -= itemWidth; // Scrollt um die Breite eines Bildes zurück
            if (currentOffset < 0) { // Begrenzen, falls die Scrollposition kleiner als 0 wird
                currentOffset = 0;
            }
            band.style.transform = `translateX(-${currentOffset}px)`; // Bewegt das Band nach rechts
        }
    });
});
