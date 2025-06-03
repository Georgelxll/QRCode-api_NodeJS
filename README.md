# 📦 Gerador de QR Code

Um projeto simples com **Node.js + Express** no backend e **HTML/JavaScript com Bootstrap** no frontend para gerar QR Codes personalizados.  
Permite ao usuário digitar um texto ou link, escolher o tamanho do QR Code e baixar a imagem gerada.

---

## 🖼️ Demonstração

![image](https://github.com/user-attachments/assets/f7dc4525-764e-48bd-b068-6d888b5e191f)


---

## 🚀 Funcionalidades

- Gerar QR Code a partir de texto/link
- Seleção de tamanho do QR Code (50px a 400px)
- Visualização instantânea
- Download da imagem `.png` do QR Code

---

## 📁 Estrutura do Projeto

```
qr-api/
├── public/
│   └── index.html          # Interface do usuário
├── index.js                # Servidor Express com geração de QR Code
├── package.json            # Dependências do projeto
└── qr.png                  # Arquivo temporário gerado (opcional)
```

---

## 🧪 Tecnologias Utilizadas

- Node.js
- Express
- [qrcode](https://www.npmjs.com/package/qrcode)
- HTML + JavaScript
- Bootstrap 5 (CDN)

---

## 🛠️ Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/qr-api.git
cd qr-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor

```bash
node index.js
```

### 4. Acesse no navegador

```
http://localhost:3000
```

---

## 🖼️ Exemplo de uso

1. Digite o texto ou link desejado.
2. Selecione o tamanho do QR Code.
3. Clique em **"Gerar QR Code"**.
4. Visualize e baixe o QR gerado.

---

## ✨ Possíveis melhorias

- Salvar histórico de QR Codes gerados
- Customizar cores (fundo e frente)
- Exportar como SVG
- Adicionar suporte a logotipo centralizado

---

## 📝 Licença

Este projeto está sob a licença MIT.  
Sinta-se livre para utilizar e modificar!
