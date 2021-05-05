/* let utilisateur = {
    age: 29,
    nom : {
        name :'jb',
        surname: 'druet',
    },
    mail : 'jb.druet@codeur.online',
    bonjour: function(){
        alert:('bonjour, je suis '+this.nom[0]+'j\'ai'+this.age + 'ans');
    }
};
console.log(utilisateur.nom.surname); */
function Utilisateur (n,a,m,p){
    this.nom =n;
    this.age = a;
    this.mail= m;
    this.surname= p;


this.bonjour =function(){
    alert('bonjour, je suis '+this.nom +""+ this.surname+'j\'ai'+this.age + 'ans');
    document.getElementById('p1').innerHTML = 'Nom complet : ' + this.nom;
    document.getElementById('p2').innerHTML = 'prénom : ' + this.nom;
    document.getElementById('p3').innerHTML = 'Age : ' + this.age;
    document.getElementById('p4').innerHTML = 'mail : ' + this.mail;
}
this.contact =function(){
    alert('contactez-moi par mail :' +this.mail+'i');
}
}


let williams =new Utilisateur ('Williams',  28, 'williams.chazal@codeur.oneline','Chazal');
let jb =new Utilisateur ('Jb',  25, 'jb.Druet@codeur.oneline','Druet');
let boris =new Utilisateur ('boris',  42, 'boris.debot@codeur.online','Debot');

boris.bonjour();
williams.bonjour();
jb.bonjour();



