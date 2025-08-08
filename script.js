document.getElementById('imageUpload').addEventListener('change', function () {
    const reader = new FileReader();
    reader.onload = function (e) {
        const uploadedImage = document.getElementById('uploadedImage');
        uploadedImage.src = e.target.result;
        uploadedImage.style.display = 'block';
        document.querySelector('.scanner').style.display = 'block';

        setTimeout(() => {
            document.querySelector('.scanner').style.display = 'none';
            generateReport();
        }, 3000); // Simulate scanning delay
    };
    reader.readAsDataURL(this.files[0]);
});

function generateRandomStats() {
    const moods = ['Happy', 'Stressed', 'Curious', 'Mischievous', 'Inspired'];
    const emotions = ['Peaceful', 'Chaotic', 'Vibrant', 'Dramatic', 'Balanced'];
    const futures = [
        'You will eat a large pizza soon 🍕',
        'A cat will cross your path 😺',
        'You might win a useless award 🏆',
        'You’ll discover a new useless talent 🪄',
        'You’ll laugh for no reason today 😂',
        'You will trip over nothing and act like you meant it 💃',
        'You’ll accidentally become a meme 😬'
    ];

    const palmLines = Math.floor(Math.random() * 50) + 50; // 50 to 100

    document.getElementById('line-count').innerText = palmLines;
    document.getElementById('mood').innerText = moods[Math.floor(Math.random() * moods.length)];
    document.getElementById('emotion').innerText = emotions[Math.floor(Math.random() * emotions.length)];
    document.getElementById('future').innerText = futures[Math.floor(Math.random() * futures.length)];
}

function generateReport() {
    document.getElementById("result-section").style.display = "block";
    generateRandomStats();
}

// Certificate generation (no changes)
document.getElementById('downloadBtn').addEventListener('click', function () {
    const resultSection = document.getElementById('result-section');
    html2canvas(resultSection).then(canvas => {
        const link = document.createElement('a');
        link.download = 'Palm_Line_Certificate.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
