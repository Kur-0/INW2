const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/agenda',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 10000
    });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function () {
    console.log("Estamos logados no mongodb");
});

const pessoaSchema = new mongoose.Schema({
    numero: Number,
    nome: String,
    idade: Number,
    email: String
});

const Contato = mongoose.model("Contato", pessoaSchema);

const epa = new Contato({
    numero: 1,
    nome: 'Epaminondas',
    idade: 17,
    email: 'epa@gmail.com'
});

console.log(epa.numero),
console.log(epa.nome);
console.log(epa.idade);
console.log(epa.email);

epa.save()

const carla = new Contato({
    numero: 1,
    nome: 'Carla',
    idade: 18,
    email: 'carla@gmail.com'
});

console.log(carla.numero),
console.log(carla.nome);
console.log(carla.idade);
console.log(carla.email);

carla.save()