"use strict";
const getListUser = document.querySelector("#holder");

document.querySelector("#getListUser").addEventListener("click", function(event){
    event.preventDefault();
    axios.get("https://reqres.in/api/users?page=2")
    .then(response=>{
        const list = response.data.data;
        console.log(`Response: ${list}`);
        const listEl =document.createElement("p"); //loop it
        listEl.innerText = list[0].id;
        getListUser.appendChild(listEl);
        console.log(`Response: ${listEl}`);



        for (let id of list[i].id){
            const dataCard = document.createElement("div");
            const firstName = document.createElement("p");
            firstName.innerText = `First name: ${id.first_name}`;
            dataCard.appendChild(firstName);

            
            const lastName = document.createElement("p");
            lastName.innerText = `First name: ${id.last_name}`;
            dataCard.appendChild(lastName);

            const email = document.createElement("p");
            email.innerText = `Email: ${id.email}`;
            dataCard.appendChild(email);


        } 
        
    })
    .catch(err => console.error(err))
});
