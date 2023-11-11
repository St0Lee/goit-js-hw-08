const form = document.querySelector(".feedback-form");

form.addEventListener("input", inputInForm);
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

 const obj = {
    email,
    message
 };
 console.log(obj);
 event.target.reset();
 localStorage.removeItem('email');
 localStorage.removeItem('message');
};


function onLoad (){
  const email = getData("email");
  const message = getData("message");

  form.elements.email.value = email;
  form.elements.message.value = message;
};

onLoad();
