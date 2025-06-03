async function generateQR() {
    const text = document.getElementById('text').value;
    const size = parseInt(document.getElementById('size').value);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Gerando QR Code...';
    try {
        const res = await fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text, size })
        });
        const data = await res.json();
        if (data.base64) {
        resultDiv.innerHTML = `
            <p><strong>QR Code gerado:</strong></p>
            <img src="${data.base64}" alt="QR Code" style="width: ${size}px; height: ${size}px;" />
            <p><a href="${data.image_url}" download="qr.png">Baixar QR Code</a></p>
        `;
        } else {
        resultDiv.innerHTML = 'Erro ao gerar QR Code.';
        }
    } catch (err) {
        console.error(err);
        resultDiv.innerHTML = 'Erro na requisição.';
    }
}