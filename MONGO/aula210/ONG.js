const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ONG', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 20000
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Falha na conexão!!!'))

db.once('open', ()=>{
    console.log("Conexão com o banco de dados realizada com sucesso!!!")
});


const usuarioSchema = new mongoose.Schema({
    email : String,
    senha : String,
});

const Usuarios = mongoose.model('Usuarios', usuarioSchema)

Usuarios.insertMany([
    {email: 'paulinho@gmail.com', senha: 'paulaocria'},
    {email: 'maria@gmail.com', senha: 'marimari1212'},
    {email: 'marco@gmail.com', senha: 'marcodobalacobaco'}
])

async function findUsuarios(){
    try{
        const usuarios = await Usuarios.find({turma: 'Turma2'});
        console.log('Usuarios: ', usuarios)
    }
    catch{
        console.error('Usuários não encontrados: ', error)
    }
}

findUsuarios();