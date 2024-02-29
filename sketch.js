let cat; // Deklariere eine Variable für das Video

function setup() {
  createCanvas(1000, 1000); // Erstelle ein Canvas mit der Größe 1000x1000 Pixel
  cat = createVideo(['assets/catvideo2.mp4']); // Lade ein Video mit dem angegebenen Format
  cat.size(width, height); // Setze die Größe des Videos auf die Größe des Canvas
  cat.loop(); // Lasse das Video in einer Schleife abspielen
  cat.hide(); // Verstecke das Videoelement
  fill(0); // Fülle die Ellipsen mit schwarzer Farbe
}

function draw() {
  background(255); // Setze den Hintergrund auf Weiß

  cat.loadPixels(); // Lade die Pixelinformationen des Videos

  // Bestimme die Größe der Schritte für das Muster basierend auf der horizontalen Mausposition
  const stepSize = round(constrain(mouseX / 8, 4, 60));

  // Iteriere durch das Canvas in Schritten von stepSize. X und Y werden um stepSize erhöht/inkrementiert
  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      const i = y * width + x; // Berechne den Index im Pixel-Array
      const darkness = (255 - cat.pixels[i * 4]) / 255; // Berechne die Dunkelheit basierend auf der Helligkeit des Videos
      const radius = stepSize * darkness; // Berechne den Radius der Ellipse basierend auf der Dunkelheit
      fill(0); // Setze die Füllfarbe auf Schwarz
      ellipse(x, y, radius, radius); // Zeichne eine Ellipse an der aktuellen Position
    }
  }
}