!function(){var e,t,a=document.querySelector(".feedback-form");function l(e){var t=localStorage.getItem("feedback-form-state");try{return JSON.parse(t)}catch(e){return t}}a.addEventListener("input",throttle((function(e){!function(e){localStorage.setItem("feedback-form-state",JSON.stringify(e))}({email:a.elements.email.value,message:a.elements.message.value})}),500)),a.addEventListener("submit",(function(e){e.preventDefault();var t=a.elements.email.value,l=a.elements.message.value,m={email:t,message:l};console.log(m),e.target.reset(),localStorage.removeItem("email"),localStorage.removeItem("message")})),e=l(),t=l(),a.elements.email.value=e,a.elements.message.value=t}();
//# sourceMappingURL=03-feedback.367e0783.js.map
