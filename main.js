const travelForm = document.travelForm

travelForm.addEventListener("submit", function(event){
    event.preventDefault()
let firstName = travelForm.firstName.value;
let lastName = travelForm.lastName.value;
let age = travelForm.age.value;
let gender = travelForm.gender.value;
let location = travelForm.location.value;



const checkedDiet = [];
for(let i = 0; i < travelForm.diet.length; i++){

    if(travelForm.diet[i].checked){
        checkedDiet.push(travelForm.diet[i].value)
    }
}

alert(`First Name: ${firstName}
Last Name: ${lastName}
Age: ${age} Gender: ${gender}
Location: ${location} 
Dietary Restriction: ${checkedDiet}  `)





})