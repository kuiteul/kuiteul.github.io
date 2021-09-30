let fizzCount = 0;
let buzzCount = 0 ;
let result;

 newNumber = parseInt(prompt ("Veuillez entrer un nombre"));

 for(let i=1; i<=newNumber; i++) {

    if(i%3 == 0 && i%5 != 0) {
        console.log("Fizz");
        fizzCount = fizzCount + 1;
    }
    else if(i%5 == 0 && i%3 !=0) {
        console.log("Buzz");
        buzzCount = buzzCount + 1;
    }
    else if(i%5 == 0 && i%3 == 0) {
        console.log("FizzBuzz");
    }
    else {
        console.log(i);
    }

 }

 console.log("Il y a "+ fizzCount + " Fizz et "+buzzCount+" Buzz");