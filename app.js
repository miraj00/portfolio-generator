// var message = 'Hello Node!';
// var sum = 5 + 3;

// console.log(message);
// console.log(sum);
//----------------------------------------------------------

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

/*
Result : 
The World@DESKTOP-0HIIFQS MINGW64 ~/Desktop/projects/portfolio-generator (feature/capture-input)
$ node app
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\The World\\Desktop\\projects\\portfolio-generator\\app'
]
*/
//---------------   var -------------------------------------------------

// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

/*
Result : 
The World@DESKTOP-0HIIFQS MINGW64 ~/Desktop/projects/portfolio-generator (feature/capture-input)
$ node app.js 'Miraj' 'Web Developer'
[ 'Miraj', 'Web Developer' ]

The World@DESKTOP-0HIIFQS MINGW64 ~/Desktop/projects/portfolio-generator (feature/capture-input)
$ node app.js 'miraj' 'patel' 'web developer' 'bootcamp'
[ 'miraj', 'patel', 'web developer', 'bootcamp' ]
*/
//------------------ const --(can't be reassigned)-----------------------------------

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

/*
Result: 
The World@DESKTOP-0HIIFQS MINGW64 ~/Desktop/projects/portfolio-generator (feature/capture-input)
$ node app.js 'miraj' 'patel' 'web developer' 'bootcamp'
[ 'miraj', 'patel', 'web developer', 'bootcamp' ]
*/
//-----------Const not working for text and numbers when reused --------------------------------------------------

// const message = 'Hello Node!';
// message = 'Goodbye Node!';

// const sum = 5 + 3;
// sum += 1;

/*
Result : 
$ node app
C:\Users\The World\Desktop\projects\portfolio-generator\app.js:49
message = 'Goodbye Node!';
        ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (C:\Users\The World\Desktop\projects\portfolio-generator\app.js:49:9)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
*/
//-------------------Const  works for Array and Objects when reused ---------------------------------------

// const animalArray = ['dog', 'cat', 'pig'];
// animalArray.push('cow');
// console.log(animalArray);


// const personObj = {
//  name: 'Lernantino',
//  age: 99
//  };

// personObj.age = 100;
// personObj.occupation = 'Developer';
// console.log(personObj);

/*
Result : 
The World@DESKTOP-0HIIFQS MINGW64 ~/Desktop/projects/portfolio-generator (feature/capture-input)
$ node app.js
[ 'dog', 'cat', 'pig', 'cow' ]
{ name: 'Lernantino', age: 100, occupation: 'Developer' }
*/

//---------------Arrow Function---------------------------------------------
/*
const printProfileData = (profileDataArr) => {
    console.log(profileDataArr);
  };
  
  printProfileData(profileDataArgs);

//----------------Function vs Arrow Syntax -------------------------------------------

// Using function expression syntax
const addNums = function(numOne, numTwo) {
    return numOne + numTwo;
  };

  
  // Using new arrow function syntax
  const addNums = (numOne, numTwo) => {
    return numOne + numTwo;
  };

*/
//-------------------------------------------------------------
/*
const addNums = (numOne, numTwo) => numOne + numTwo;

const sum = addNums(5, 3);    // sum would be 8

//--------------------------------------------------------

const addNums = (numOne, numTwo) => {
    console.log(numOne, numTwo);
    return numOne + numTwo;
  };
*/
//------------???? -----------------------------------------------


const profileDataArgs = process.argv.slice(2);

// Option 1 : ----------------------------------------------------
const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

// Option 2: ----------------------------------------------------  
  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};
printProfileData(profileDataArgs);

  console.log('================');

/*
Type this in git to see Result :
  node app.js 'Miraj' 'Web Developer'
*/  




