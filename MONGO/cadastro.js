const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/livros', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function () {
    console.log("Estamos logados no mongodb");
});

const produtoSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    ano: Number,
    valor: Number,
    estoque: Number
});

const Produto = mongoose.model("Produto", produtoSchema);

const biblia = new Produto({
    nome: 'Bíblia',
    descricao: 'A Bíblia é uma coleção ou compilação de livros sagrados, contendo as histórias, doutrinas, códigos e tradições que guiam os cristãos, com base na tradição judaica (Antigo Testamento) e na divulgação do Evangelho (Novo Testamento).',
    ano: 1455,
    valor: 52,
    estoque: 23
});

biblia.save()

const oPequenoPrincipe = new Produto({
    nome: 'O Pequeno Príncipe',
    descricao: 'Le Petit Prince é uma novela do escritor, aviador aristocrata francês Antoine de Saint-Exupéry.',
    ano: 1943,
    valor: 25,
    estoque: 12
});

oPequenoPrincipe.save()