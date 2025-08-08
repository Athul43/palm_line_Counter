const uploadInput = document.getElementById("upload");
const analyzeBtn = document.getElementById("analyzeBtn");
const imagePreview = document.getElementById("imagePreview");
const resultDiv = document.getElementById("result");
const lineCountText = document.getElementById("lineCount");
const fortuneText = document.getElementById("fortune");

const statsDiv = document.createElement("div");
statsDiv.id = "uselessStats";
resultDiv.appendChild(statsDiv);

const fortunes = [
  "You'll trip on a flat surface today!",
  "You are 73% made of Wi-Fi signals.",
  "Your palm lines spell out 'pizza'.",
  "You have more wrinkles than a raisin!",
  "You're destined to lose one sock every laundry day.",
  "You might be secretly a potato.",
  "Your palm says: reboot your life in safe mode.",
  "Aliens are watching you. Nice hands!",
  "You are a glitch in the matrix.",
  "Your next crush is allergic to palm oil."
];

const palmMoods = [
  "Sassy",
  "Paranoid",
  "Sleepy",
  "Angsty",
  "Hyperactive",
  "Evil Genius",
  "Plotting Something",
  "Daydreaming",
  "Too Tired for This",
  "Craving Mangoes"
];

const funFacts = [
  "Your palm contains an ancient Wi-Fi password.",
  "Your hand once high-fived a ghost.",
  "These lines reveal your past life as a burrito.",
  "NASA once used a palm like yours to calculate moon landings.",
  "Your palm lines form a QR code to nowhere.",
  "You once shook hands with destiny. It was sweaty.",
  "Your palm reveals you’re 23% watermelon.",
  "Your palm lines are a treasure map to your lost motivation.",
  "This hand may be the chosen one. Or not."
];

uploadInput.addEventListener("change", function () {
  const file = uploadInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.innerHTML = `<img src="${e.target.result}" alt="Palm Image" />`;
    };
    reader.readAsDataURL(file);
  }
});

analyzeBtn.addEventListener("click", function () {
  if (!uploadInput.files.length) {
    alert("Please upload a palm image first!");
    return;
  }

  resultDiv.classList.add("hidden");
  analyzeBtn.innerText = "Analyzing...";
  analyzeBtn.disabled = true;

  setTimeout(() => {
    const lines = Math.floor(Math.random() * 50) + 10;
    const wifiSignal = Math.floor(Math.random() * 101);
    const lizardProbability = Math.floor(Math.random() * 100);
    const raisinChance = Math.floor(Math.random() * 50);
    const wrinkleIQ = 50 + Math.floor(Math.random() * 51);
    const mood = palmMoods[Math.floor(Math.random() * palmMoods.length)];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const fact = funFacts[Math.floor(Math.random() * funFacts.length)];

    lineCountText.innerText = `You have ${lines} mysterious palm lines.`;
    fortuneText.innerText = `🔮 Fortune: ${randomFortune}`;
    document.getElementById("funFact").innerText = `🧃 Fun Fact: ${fact}`;

    statsDiv.innerHTML = `
      <h3>🤯 Useless Palm Stats:</h3>
      <ul style="list-style: none; padding: 0;">
        <li>📶 Hand Signal Strength: ${wifiSignal}% (Good for connecting to drama)</li>
        <li>🦎 Lizard Person Probability: ${lizardProbability}%</li>
        <li>🍇 Raisin Transformation Chance: ${raisinChance}%</li>
        <li>🧠 Wrinkle IQ: ${wrinkleIQ}</li>
        <li>😐 Palm Mood: ${mood}</li>
      </ul>
    `;

    resultDiv.classList.remove("hidden");
    analyzeBtn.innerText = "Start Analysis";
    analyzeBtn.disabled = false;
  }, 2000);
});

function downloadCertificate() {
  const name = prompt("Enter your name for the certificate:");
  if (!name) return;

  document.getElementById("certName").innerText = `Awarded to: ${name}`;
  document.getElementById("certLines").innerText = lineCountText.innerText;
  document.getElementById("certFortune").innerText = fortuneText.innerText;
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
