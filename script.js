function calculateArea() {
    const base = document.getElementById('baseInput').value;
    const height = document.getElementById('heightInput').value;

    if (base && height) {
        const area = 0.5 * base * height;
        document.getElementById('result').innerHTML = `<p>Luas segitiga adalah: ${area} cm²</p>`;
    } else {
        document.getElementById('result').innerHTML = `<p>Masukkan nilai alas dan tinggi</p>`;
    }
}