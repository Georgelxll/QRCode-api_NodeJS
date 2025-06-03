const express = require('express');
const QRCode = require('qrcode');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Rota principal
app.post('/generate', async (req, res) => {
  const { text, size } = req.body;

  if (!text) return res.status(400).json({ error: 'Texto é obrigatório.' });

  const qrOptions = {
    width: size || 200, // tamanho em pixels (default: 200)
  };

  try {
    await QRCode.toFile('./qr.png', text, qrOptions);
    const qrBase64 = await QRCode.toDataURL(text, qrOptions);

    res.json({
      message: 'QR code gerado com sucesso!',
      base64: qrBase64,
      image_url: 'http://localhost:3000/qr.png',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao gerar QR code.' });
  }
});

app.use('/qr.png', express.static('qr.png'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
