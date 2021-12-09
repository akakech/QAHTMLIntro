"use strict"
const output = document.querySelector("#superheroes")

axios.get('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json')
.then(response =>{
    const squad = response.data;
    console.log("Res: ", response);

    const name = document.createElement("h3");
    const hero = squad.members[0];
    name.innerText = hero.name;
    output.appendChild(name);

    const age = document.createElement("p");
    age.innerText = hero.age;
    output.appendChild(age);

    const secretIdentity = document.createElement("p");
    secretIdentity.innerText = hero.secretIdentity;
    output.appendChild(secretIdentity);

    const powers = document.createElement("p");
    powers.innerText = powerArr();
    output.appendChild(powers);

    function powerArr(){
    
        for(let i; i<hero.powers.length; i++){
            hero.powers[i];
            console.log(hero.powers[i]);
            
        }
        return hero.powers;
    }
    

});

