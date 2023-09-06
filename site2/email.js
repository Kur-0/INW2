


function createLogin(){
    var email = document.getElementById('email').value;
    var password=document.getElementById("password").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password).then(user =>{
        console.log('Usuário', user);
        alert('Usuário criado e logado com sucesso');
    }).catch(err =>{
        console.log('erro', err);
    });

}

function loginEmail(){
    var email = document.getElementById('email').value;
    var password=document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        alert('Usuário logado!');
    }).catch(err =>{
        console.error('Error', err)
    });
}


function deleteUser(){
    var currentUser;
    currentUser = firebase.auth().currentUser;
    if(currentUser){
        currentUser.delete().then(()=>{
            alert('Usuário deletado');
        }).catch(err =>{
            console.error('Error', err)
        });
    }
}

function logout(){
    firebase.auth().signOut().then(()=>{
        alert('Usuário deslogado');
    })
}