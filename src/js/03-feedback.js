import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(inputInForm, 500));
form.addEventListener("submit", submitForm);


function inputInForm(event) {
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    saveToLS(formData);
};

function saveToLS(formData) {
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

function getData (key){
    const data = localStorage.getItem("feedback-form-state");
    try{
        return JSON.parse(data);
    }
    catch {
        return data;
    };
};

function submitForm (event){
 event.preventDefault();

 const email =  form.elements.email.value;
 const message = form.elements.message.value;

  if (email === "" || message === "" ) {
    const message = "Alert! All the fields should be filled."
    alert(message);
    return;
  }

 const obj = {
    email,
    message
 };
 console.log(obj);
 event.target.reset();
 localStorage.removeItem("feedback-form-state");
};


function onLoad (){
  const formData = getData("feedback-form-state");
 if(formData){ 
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
 }
};

onLoad();
