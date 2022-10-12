const holder_error = document.querySelector('#holder-error');
const card_error = document.querySelector('#card-error');
const month_error = document.querySelector("#month-error");
const year_error = document.querySelector('#year-error');
const cvc_error = document.querySelector('#cvc-error');
let cvc = document.querySelector('#cvc');
let holder = document.querySelector('#holder');
let full_name = document.querySelector('#client-full-name');
let exp_month = document.querySelector('#exp-month');
let exp_year= document.querySelector('#exp-year');
let card_number = document.querySelector('#card-number');
let number = document.querySelector('#number');
let month = document.querySelector('#month');
let year = document.querySelector("#year");
let cvc_number = document.querySelector('#cvc-number');
let counter = 0;
let occurence = 0;
let month_now = new Date();
let holder_count = 0;
let card_number_count = 0;

card_number.addEventListener('keyup', () => {
     if(card_number.value.match(/[a-bA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)){  
          if(card_number.value.length == 4 || card_number.value.length == 9 || card_number.value.length == 14) {
               card_number.value += " ";
          }
          number.innerHTML = card_number.value;
     }
     if(card_number.value === "") {
          number.innerHTML = "0000 0000 0000 0000";
     }
    if(card_number.value === ""){
          counter = 0;
          occurence = 0;
    }
});

holder.addEventListener('keyup', () => {
     full_name.innerHTML = holder.value;
     if(holder.value === "") {
          full_name.innerHTML = "Jane Applessed";
     }
});

month.addEventListener("keyup", () => {
     exp_month.innerHTML = month.value;
     if(month.value === "") {
          exp_month.innerHTML = "00";
     }
});

year.addEventListener("keyup", () => {
     exp_year.innerHTML = year.value;
     if(year.value === "") {
          exp_year.innerHTML = "00";
     }
});

cvc.addEventListener('keyup', (e) => {
     cvc_number.innerHTML = cvc.value;
     if(cvc.value === "") {
          cvc_number.innerHTML = "000";
     }
});

document.querySelector('#confirm').addEventListener('click', (e) => {
     //Test control for holder full name
   if(document.forms['myForm']['holder'].value === "") {
          holder_error.innerHTML = "Can't be blank";
          holder_error.classList.add('input-error');
          document.querySelector('#holder').style.borderColor = "red";
          e.preventDefault();
   }
   else if(document.forms['myForm']['holder'].value.length < 3 ) {
          holder_error.innerHTML = "the name is too short, minimum three letters";
          holder_error.classList.add('input-error');
          document.querySelector('#holder').style.borderColor = "red";
          e.preventDefault();
   }
   else {
          holder_error.innerHTML = "";
          holder_error.classList.remove('input-error');
          document.querySelector('#holder').style.borderColor = "green";
          holder = "ok";
   }
     //Test control for card number field
   if(document.forms['myForm']['card-number'].value === "") {
          card_error.innerHTML = "Can't be blank";
          card_error.classList.add('input-error');
          card_number.style.borderColor = "red";
          e.preventDefault();
   }
   else if(document.forms['myForm']['card-number'].value.length < 19) {
          //We take length up to 19 because white space will be added after 4 digits and each space is count as character
          card_error.innerHTML = "Card number is too short";
          holder_error.classList.add('input-error');
          card_number.style.borderColor = "red";
          e.preventDefault();
   }
   else if(document.forms['myForm']['card-number'].value.match(/[a-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/i)) {
          card_error.innerHTML = "Wrong format, numbers only";
          card_error.classList.add('input-error');
          card_number.style.borderColor = "red";
          e.preventDefault();
   }
   else {
          card_error.innerHTML = "";
          card_error.classList.remove('input-error');
          card_number.style.borderColor = "green";
          card_number = "ok";
   }
   //Test control for month field 
   if(document.forms['myForm']['month'].value === "") {
          month_error.innerHTML = "Can't be blank";
          month_error.classList.add('input-error');
          month.style.borderColor = "red";
          e.preventDefault();
   }
   else if(document.forms['myForm']['month'].value.length < 2) {
          month_error.innerHTML = "Month is too short";
          month_error.classList.add('input-error');
          month.style.borderColor = "red";
          e.preventDefault();
   }
   else if(document.forms['myForm']['month'].value.match(/[a-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/i)) {
          month_error.innerHTML = "Wront format, numbers only";
          month_error.classList.add('input-error');
          month.style.borderColor = "red";
          e.preventDefault();
   }
   else if(document.forms['myForm']['month'].value <= month_now.getMonth()+1) {
          month_error.innerHTML = "Card expired";
          month_error.classList.add('input-error');
          month.style.borderColor = "red";
          e.preventDefault();
   }
   else {
          month_error.innerHTML = "";
          month.style.borderColor = "green";
          date_error.classList.remove('input-error');
          month = "ok";
   }
     //Test Control for year field
   if(document.forms['myForm']['year'].value === "") {
          year_error.innerHTML = "Can't be blank";
          year_error.classList.add('input-error');
          year.style.borderColor = "red";
          e.preventDefault();
   }
   else if(document.forms['myForm']['year'].value.length < 2 ) {
          year_error.innerHTML = "Year is too short";
          year_error.classList.add('input-error');
          year.style.borderColor = "red";
          e.preventDefault();
   }
   else if(parseInt(document.forms['myForm']['year'].value) <=  22) {
          year_error.innerHTML = "Card expired";
          year_error.classList.add('input-error');
          year.style.borderColor = "red";
          e.preventDefault();
   }
   else if(document.forms['myForm']['year'].value.match(/[a-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/i)) {
          year_error.innerHTML = "Wront format, numbers only";
          year_error.classList.add('input-error');
          year.style.borderColor = "red";
          e.preventDefault();
     } 
   else {
          year_error.innerHTML = "";
          year.style.borderColor = "green";
          date_error.classList.remove('input-error');
          year = "ok";
     }
     //Test Control for CVC field
   if(document.forms['myForm']['cvc'].value === "") {
          cvc_error.innerHTML = "Can't be blank";
          cvc_error.classList.add('input-error');
          cvc.style.borderColor = "red";
          e.preventDefault();
   }
   else if(document.forms['myForm']['cvc'].value.length < 3 ) {
          cvc_error.innerHTML = "CVC must be three numbers";
          cvc_error.classList.add('input-error');
          cvc.style.borderColor = "red";
          e.preventDefault();
   }
   else if(document.forms['myForm']['cvc'].value.match(/[a-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/i)) {
          cvc_error.innerHTML = "Wront format, numbers only";
          cvc_error.classList.add('input-error');
          cvc.style.borderColor = "red";
          e.preventDefault();
   }
   else {
          cvc_error.innerHTML = "";
          cvc.style.borderColor = "green";
          cvc.classList.remove('input-error');
          cvc = "ok";
   }

   if(holder === card_number === month.value === year.value === cvc.value === "ok") {
       document.querySelector('#user-fullName').style.display = "none";
       document.querySelector('#card-info').style.display = "none";
       document.querySelector('#period').style.display = "none";
       document.querySelector('#thank-page').style.display = "block";
       document.querySelector('#confirm').innerHTML = "Continue";
       e.preventDefault();
   }
});