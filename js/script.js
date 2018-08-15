var textBox = document.querySelector('#other-title');
var userName = document.querySelector('#name');
var email =document.querySelector('#mail');
document.addEventListener('DOMContentLoaded', function() {
   userName.focus();
   textBox.style.display = "none";
});

var selected = document.querySelector('#title');
console.log(selected);
selected.addEventListener('change', function(e){
     if(e.target.value === 'other') {
        textBox.style.display = "";
     } else {
        textBox.style.display = "none";
      }
});

/* ---- Extra Credit ---- */
/* ---- Color Menu is hidden until a theme is selected ---- */
var colorMenu = document.querySelector("#colors-js-puns");
colorMenu.style.display = "none";


var design = document.querySelector('#design');
var color = document.querySelector('#color');
console.log(design);
design.addEventListener('change', function(e){
   colorMenu.style.display = "";
   if(e.target.value === 'Select Theme'){
     colorMenu.style.display = "none";
       for(let i=0; i<color.length; i++){
         color[i].style.display = "";
       }
   } else if(e.target.value === 'js puns') {
        for(let i=0; i<color.length; i++){
          if(!color[i].textContent.includes('JS Puns')){
             color[i].style.display = "none";
          }
          color[i].style.display = "";
        }
        color.selectedIndex = 0;
     } else if(e.target.value === 'heart js') {
          for(let i=0; i<color.length; i++){
            if(color[i].textContent.includes('JS Puns')){
               color[i].style.display = "none";
      }
      color[i].style.display = "";
    }
    color.selectedIndex = 3;
  }
});

design.addEventListener('click', function(e){
     if(e.target.value === 'js puns') {
        for(let i=0; i<color.length; i++){
          if(!color[i].textContent.includes('JS Puns')){
             color[i].style.display = "none";
          }
        }
     } else if(e.target.value === 'heart js') {
          for(let i=0; i<color.length; i++){
            if(color[i].textContent.includes('JS Puns')){
               color[i].style.display = "none";
      }
    }
  }
});

/* ---- Register for activities ---*/
const activities = document.getElementsByClassName('activities')[0];
const label = activities.children;
var total = activities.lastElementChild;  // total cost to be displayed
var count = 0;

activities.addEventListener('change', function(e){
  if(e.target.checked){
    // if checkbox is checked.
var checkbox = e.target.parentElement;
var programName = checkbox.textContent; // name of the activity selected.
var name = programName.substring(programName.lastIndexOf(','), 0);
// day and time of the activity selected.
var day = name.substring(name.indexOf('—')+1);

 if(programName.indexOf("Main Conference")<=-1)
 {
    // console.log(programName);
for(let i=1; i<label.length-1; i++)
{
  var a = activities.children[i].textContent;
  if(a.indexOf(day)>-1) {
    // disable the competitive workshops
      activities.children[i].children[0].disabled = true;
  }
  e.target.disabled = false;
  }
   // count = total cost of workshops selected.
    count = count + 100;
} else {
   count = count + 200; // add the cost when Main conference is unchecked
 }
 total.textContent = 'Total:' + count; // display the total cost
} else { // when checkbox is unchecked
  var checkbox = e.target.parentElement;
  var programName = checkbox.textContent;
  var cost = programName.substring(programName.lastIndexOf(',')+1);
  var name = programName.substring(programName.lastIndexOf(','), 0);
  var day = name.substring(name.indexOf('—')+1);
   console.log("Checkbox", name);
   if(programName.indexOf("Main Conference")<=-1)
   {
      console.log(programName);
  for(let i=1; i<label.length; i++)
  {
    var a = activities.children[i].textContent;
    if(a.indexOf(day)>-1) {
        activities.children[i].children[0].disabled = false;
    }
    }
      count = count - 100; // deduct the cost from the total when a workshop is unchecked.
   } else { // deduct the cost when Main conference is unchecked
       count = count - 200;
   }
 total.textContent = 'Total:' + count; // display the total cost
}
});

/* ---- Select Payment Method --- */

var payment = document.querySelector('#payment');
var creditCard = document.querySelector('#credit-card');
var payPal = creditCard.nextElementSibling;
var bitCoin = creditCard.nextElementSibling.nextElementSibling;
creditCard.style.display = "";
payPal.style.display = "none";
bitCoin.style.display = "none";
payment.addEventListener('change', function(e){
  payment.children[0].disabled = true;
  if(payment.children[1].selected){
     creditCard.style.display = "";
     payPal.style.display = "none";
     bitCoin.style.display = "none";
  } else if(payment.children[2].selected){
    creditCard.style.display = "none";
    payPal.style.display = "";
    bitCoin.style.display = "none";
  } else {
    creditCard.style.display = "none";
    payPal.style.display = "none";
    bitCoin.style.display = "";
  }
});

/* ---- Form Validation when user clicks Register button ---- */

var register = document.querySelector('button');
var cardNumber = document.querySelector('#cc-num');
var cardLength = cardNumber.value.length;
var zipCode = document.querySelector('#zip');
var cvv = document.querySelector('#cvv');
var emailExp = /\S+@\S+\.\S+/;
register.addEventListener('click', function(e){
  if(userName.value === ''){
       e.preventDefault()
       userName.className = "invalid";
       userName.previousElementSibling.textContent = "Name: Please enter a Name";
       userName.previousElementSibling.style.color = 'red';
  } else {
    userName.classList.remove("invalid");
    userName.previousElementSibling.textContent = "Name:";
    userName.previousElementSibling.style.color = 'black';
  }
  if(email.value === ''){
    e.preventDefault()
  email.className = "invalid";
  email.previousElementSibling.textContent = "Email: Enter an email address";
  email.previousElementSibling.style.color = "red";
  } else if(!emailExp.test(email.value.toLowerCase())){
       e.preventDefault()
     email.className = "invalid";
     email.previousElementSibling.textContent = "Email: Please enter a valid email address";
     email.previousElementSibling.style.color = "red";
  } else {
        if(emailExp.test(email.value)) {
          email.classList.remove("invalid");
          email.previousElementSibling.textContent = "Email:";
          email.previousElementSibling.style.color = "black";
        }
  }
   if(count===0){
       e.preventDefault()
       activities.children[0].textContent = "Registers for Activities : Please select atleast one activity";
       activities.children[0].style.color = "red";
  } else {
    activities.children[0].textContent = "Registers for Activities:";
    activities.children[0].style.color = "black";
  }
  if(payment.children[1].selected){
/* ---- Extra Credit --- */
/*  Error Message when Card Number field is blank : "Card Number: Enter a card number"
    Error Message when Card Number field has entered characters (like abcd#$@!) instead of digits:  "Card Number: Enter only Digits"
    Error Message when Card Number is less than 13 or greater than 16 : "Enter a number between 13 and 16 digits"
    Error Message when Zipcode field is blank : "Enter Zip Code"
    Error Message when Zipcode is not 5 digits long or when the entered zipcode has any characters other than number : "Zip Code: Enter 5 digits"
    Error Message when CVV is not 3 digits long or when the entered CVV has any characters other than number : "CVV: Enter 3 digits" */

      if(cardNumber.value === ''){
        e.preventDefault()
      cardNumber.previousElementSibling.textContent = "Card Number: Enter a card number";
      cardNumber.previousElementSibling.style.color = "red";
    } else if(isNaN(cardNumber.value)){
      cardNumber.previousElementSibling.textContent = "Card Number: Enter only Digits";
      cardNumber.previousElementSibling.style.color = "red";
    } else if(cardLength > 16 || cardLength < 13){
           e.preventDefault()
           cardNumber.previousElementSibling.textContent = "Enter a number between 13 & 16 digits";
           cardNumber.previousElementSibling.style.color = "red";
           } else {
       cardNumber.previousElementSibling.textContent = "Card Number";
       cardNumber.previousElementSibling.style.color = "black";
     }

     if(zipCode.value === ''){
       e.preventDefault()
       zipCode.previousElementSibling.textContent = "Enter Zip Code";
       zipCode.previousElementSibling.style.color = "red";

     } else if(isNaN(zipCode.value) || zipCode.value.length != 5){
        e.preventDefault()
        zipCode.previousElementSibling.textContent = "Zip Code: Enter 5 digits";
        zipCode.previousElementSibling.style.color = "red";
      } else {
        zipCode.previousElementSibling.textContent = "Zip Code:";
        zipCode.previousElementSibling.style.color = "black";
    }
    if(isNaN(cvv.value) || cvv.value.length != 3){
      e.preventDefault()
      cvv.previousElementSibling.textContent = "CVV: Enter 3 digits";
      cvv.previousElementSibling.style.color = "red";
    } else {
      cvv.previousElementSibling.textContent = "CVV:";
      cvv.previousElementSibling.style.color = "black";
    }
  }
});

/* ---- Real-time Error Messages ---- */

var form = document.querySelectorAll('form')[0];
form.addEventListener("keyup", function(e){
// Real-time Error Messages for email field
if(e.target === email) {
  if(email.value === ''){
    e.preventDefault()
  email.className = "invalid";
  email.previousElementSibling.textContent = "Email: Enter an email address";
  email.previousElementSibling.style.color = "red";
} else if(!emailExp.test(email.value.toLowerCase())){
       e.preventDefault()
     email.className = "invalid";
     email.previousElementSibling.textContent = "Email: Please enter a valid email address";
     email.previousElementSibling.style.color = "red";
  } else {
        if(emailExp.test(email.value)) {
          email.classList.remove("invalid");
          email.previousElementSibling.textContent = "Email:";
          email.previousElementSibling.style.color = "black";
        }
  }
}
// Real-time Error Messages for CARD NUMBER field
if(e.target === cardNumber) {
  if(cardNumber.value === ''){
    e.preventDefault()
  cardNumber.previousElementSibling.textContent = "Card Number: Enter a card number";
  cardNumber.previousElementSibling.style.color = "red";
} else if(isNaN(cardNumber.value)){
  cardNumber.previousElementSibling.textContent = "Card Number: Enter only Digits";
  cardNumber.previousElementSibling.style.color = "red";
} else if(cardLength > 16 || cardLength < 13){
       e.preventDefault()
       cardNumber.previousElementSibling.textContent = "Enter a number between 13 & 16 digits";
       cardNumber.previousElementSibling.style.color = "red";
       } else {
   cardNumber.previousElementSibling.textContent = "Card Number";
   cardNumber.previousElementSibling.style.color = "black";
 }
}
// Real-time Error Messages for ZIP CODE field
  if(e.target === zipCode){
 if(zipCode.value === ''){
   e.preventDefault()
   zipCode.previousElementSibling.textContent = "Enter Zip Code";
   zipCode.previousElementSibling.style.color = "red";

 } else if(isNaN(zipCode.value) || zipCode.value.length != 5){
    e.preventDefault()
    zipCode.previousElementSibling.textContent = "Zip Code: Enter 5 digits";
    zipCode.previousElementSibling.style.color = "red";
  } else {
    zipCode.previousElementSibling.textContent = "Zip Code:";
    zipCode.previousElementSibling.style.color = "black";
}
}
// Real-time Error Messages for CVV field
 if(e.target === cvv) {
if(isNaN(cvv.value) || cvv.value.length != 3){
  e.preventDefault()
  cvv.previousElementSibling.textContent = "CVV: Enter 3 digits";
  cvv.previousElementSibling.style.color = "red";
} else {
  cvv.previousElementSibling.textContent = "CVV:";
  cvv.previousElementSibling.style.color = "black";
}
}
});
