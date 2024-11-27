// rotasUpload.cjs
const express = require('express');
const multer = require('multer');
const path = require('path');

console.log("entrol")

// Diretório onde as imagens serão armazenadas
const uploadPath = path.join(__dirname, '../../imgs');

// Criação do middleware de upload usando o multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath); // Diretório de destino para os uploads
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Nome único para o arquivo
  }
});

const upload = multer({ storage: storage });

const uploadRouter = express.Router();

// Endpoint de upload de imagem
uploadRouter.post("/upload", upload.single("imagem"), (req, res) => {
  console.log("aqui")
  if (req.file) {
    console.log("Arquivo recebido:", req.file)
    // Envia a URL do arquivo carregado
    res.send({ message: "Imagem carregada com sucesso", fileUrl: `../imgs/${req.file.filename}`, filename: req.file.filename });
  } else {
    res.status(400).send("Erro ao carregar a imagem.");
  }
});

// Rota para servir imagens da pasta 'imgs'
uploadRouter.use('/imgs', express.static(uploadPath)); // Agora as imagens podem ser acessadas em http://localhost:3003/imgs/nomedaimagem

module.exports = { uploadRouter }; // Exporte o uploadRouter corretamente
