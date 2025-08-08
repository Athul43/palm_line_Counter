const fortunes = [
  "You're destined to find ₹10 in your old jeans.",
  "The universe will reward your laziness... eventually.",
  "Your future includes a lot of scrolling.",
  "Greatness awaits... after this nap.",
  "One of your palm lines is a loading bar. Stay tuned."
];

const funFacts = [
  "Palm lines have no actual connection to the future.",
  "Fortune-telling is 20% skill, 80% dramatic pause.",
  "You just scanned your hand for fun. Congrats!",
  "Some frogs have more accurate fortunes than this app.",
  "Palmistry dates back to 3000 BCE — still useless!"
];

function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function() {
    const image = document.getElementById('uploadedImage');
    image.src = reader.result;
    image.classList.remove("hidden");

    // Restart scan animation
    const scanLine = document.querySelector('.scan-line');
    scanLine.style.animation = "none";
    void scanLine.offsetWidth; // trigger reflow
    scanLine.style.animation = null;

    // Wait 3 seconds to simulate "scanning"
    setTimeout(() => {
      analyzePalm();
    }, 3000);
  }
  reader.readAsDataURL(event.target.files[0]);
}

function analyzePalm() {
  const lines = Math.floor(Math.random() * 10) + 3;
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  const fact = funFacts[Math.floor(Math.random() * funFacts.length)];

  document.getElementById("lineCount").innerText = `🖐️ Detected ${lines} major palm lines.`;
  document.getElementById("fortune").innerText = `🔮 Fortune: ${fortune}`;
  document.getElementById("funFact").innerText = `🧃 Fun Fact: ${fact}`;

  document.getElementById("results").classList.remove("hidden");
}

function downloadCertificate() {
  const name = prompt("Enter your name for the certificate:");
  if (!name) return;

  document.getElementById("certName").innerText = `Awarded to: ${name}`;
  document.getElementById("certLines").innerText = document.getElementById("lineCount").innerText;
  document.getElementById("certFortune").innerText = document.getElementById("fortune").innerText;
  document.getElementById("certFact").innerText = document.getElementById("funFact").innerText;

  const certificateElement = document.getElementById("certificate");
  certificateElement.classList.remove("hidden");

  html2canvas(certificateElement).then(canvas => {
    const link = document.createElement("a");
    link.download = `${name}_PalmLine_Certificate.png`;
    link.href = canvas.toDataURL();
    link.click();
    certificateElement.classList.add("hidden");
  });
}
