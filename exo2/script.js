"use strict";
//noms des etudiants regrouper dans un tableau
const etudiants = ["Etudiant1", "Etudiant2","Etudiant3"];

function f1(){
    for(const nom of etudiants){
        console.log(nom);
    }
}

const etudaint = {
    nom: "Jhon",
    prenom: "DOE",
    age: 30
};

function f2(){
    console.log(etudaint);
}

const etudiantobjets = [
    {nom: "nom1",prenom: "prenom1",age: 21},
    {nom: "nom2",prenom: "prenom2",age: 22},
    {nom: "nom3",prenom: "prenom3",age: 23}
];

function f3(){
    for(const e of etudiantobjets){
        console.log(e.nom + "-" + e.prenom + "-" + e.age);
    }
}