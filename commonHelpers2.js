import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o={email:"",message:""},a=document.querySelector("form.feedback-form");a.addEventListener("input",r);a.addEventListener("submit",l);s();function r(e){const t=e.target.name;o[t]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))}function s(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;const{email:t,message:n}=a.elements;t.value=e.email,n.value=e.message}function l(e){e.preventDefault();const{email:t,message:n}=a.elements;if(t.value===""||n.value===""){alert("Fill please all fields");return}localStorage.removeItem("feedback-form-state"),console.log(o),a.reset()}
//# sourceMappingURL=commonHelpers2.js.map
