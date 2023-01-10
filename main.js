const travelForm = document.travelForm

travelForm.addEventListener("submit", function(event){
    event.preventDefault()
let firstName = travelForm.firstName.value;
let lastName = travelForm.lastName.value;
let age = travelForm.age.value;
let gender = travelForm.gender.value;
let location = travelForm.location.value;
let diet = travelForm.diet.value;


alert(`First Name: ${firstName} Last Name: ${lastName} Age: ${age} Gender: ${gender} Location: ${location} Diet: ${diet}  `)

})