const lineCountText = document.getElementById("lineCountText");
const fortuneText = document.getElementById("fortuneText");

const fortunes = [
  "Your future is... probably fine.",
  "You will soon eat something amazing.",
  "Fortune favors the palm reader!",
  "Beware of cats and spaghetti.",
  "Your left sock will bring you luck.",
  "Soon, you will laugh at something dumb.",
  "A meme will change your mood today."
];

const funFacts = [
  "Your palm has over 27 bones!",
  "Left-handed people have slightly different palm lines.",
  "Some believe palm lines change every 7 years.",
  "Palmistry dates back to ancient India and China.",
  "In palmistry, the heart line reveals emotional depth.",
  "No two palms are the same — like fingerprints!",
  "Some claim deeper lines mean a more 'eventful' life.",
  "More palm lines ≠ more wisdom... or maybe it does?",
  "Even AI doesn’t really know what it’s doing here!",
  "Your palm just became famous in a useless project!"
];

document.getElementById("imageInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const img = document.getElementById("uploadedImage");
  img.src = URL.createObjectURL(file);
  img.style.display = "block";
});

function analyzePalm() {
  const randomLines = Math.floor(Math.random() * 15) + 3;
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

  lineCountText.innerText = `🖐️ You have ${randomLines} palm lines!`;
  fortuneText.innerText = `🔮 Fortune: ${randomFortune}`;
  document.getElementById("funFact").innerText = `📢 Fun Fact: ${randomFact}`;
}

function downloadCertificate() {
  const name = prompt("Enter your name for the certificate:");
  if (!name) return;

  document.getElementById("certName").innerText = `Awarded to: ${name}`;
  document.getElementById("certLines").innerText = lineCountText.innerText;
  document.getElementById("certFortune").innerText = fortuneText.innerText;
  document.getElementById("certFact").innerText = document.getElementById("funFact").innerText;

  const certificate = document.getElementById("certificate");
  certificate.classList.remove("hidden");

  html2canvas(certificate).then(canvas => {
    const link = document.createElement("a");
    link.download = `${name}_PalmLine_Certificate.png`;
    link.href = canvas.toDataURL();
    link.click();
    certificate.classList.add("hidden");
  });
}
