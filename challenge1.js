/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName (){
const name = ("abdulrahman");
console.log (name);
}
printName();
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge (birthYear){
    let age = 2023 - birthYear;
    console.log (age);
    }
    printAge(1986);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */


 /** My CODE
    function printHello(name, language){
    if language (en);
        console.log (`Hello ${name}`);
        else "false"
    }
/**  
    else if language == 'es':
        print ('Hola', name)
    else language == 'fr':
        print ('Bonjour', name)
    else language == 'tr':
        print ('Merhaba', name)
}
printHello(en);

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
