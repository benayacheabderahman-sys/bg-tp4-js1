"use strict";

const students = [
    [1000, "JHON", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3]
];

const moyenne = 10; //moyenne d'admission

//fonction qui retourne un boolean et qui comparre la note et la moyenne
function b(note){
    return note >= moyenne;
}

function A(){
    for(const e of students){
        const id = e[0];
        const note = e[3];

        const decision = b(note) ? "Admis" : "Ajourné"
        console.log(id + ":" + decision);

    }
}