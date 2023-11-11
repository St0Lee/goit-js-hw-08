const form = document.querySelector(".feedback-form");

form.addEventListener("input", inputInForm);
form.addEventListener("submit", submitForm);


function inputInForm(event) {
    const key = event.target.name;
    const value = event.target.value;
    saveToLS(key, value);
    function saveToLS(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
};

function getData (key){
    const data = localStorage.getItem(key);
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
