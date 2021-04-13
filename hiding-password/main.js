const input = document.getElementById("input") ;

const display = document.getElementById("display")


document.getElementById('checkbox').addEventListener('click', function () {
     if (input.type == 'password'){
        input.type = 'text'
         document.getElementById('display').innerHTML = 'Cacher le Mot de Passe';
     }
     else {
         input.type = 'password';
        document.getElementById('display').innerHTML = 'Voir le mot de passe';
    }
})