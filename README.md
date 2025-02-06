<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Penghitung Luas Segitiga</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Penghitung Luas Segitiga</h1>
        <div class="input-box">
            <input type="number" id="baseInput" placeholder="Masukkan alas (cm)" required>
            <input type="number" id="heightInput" placeholder="Masukkan tinggi (cm)" required>
            <button onclick="calculateArea()">Hitung Luas</button>
        </div>
        <div class="result" id="result">
            <!-- Hasil luas segitiga akan ditampilkan di sini -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
