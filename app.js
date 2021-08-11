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
/*
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


Type this in git to see Result :
  node app.js 'Miraj' 'Web Developer'
------------------------------------------------------------------
*/
/*
const profileDataArgs = process.argv.slice(2);

const generatePage = () => 'Name: Jane, Github: janehub';

console.log(generatePage());
*/

//--------Template Literals-------------------------------------------------------------
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// console.log(generatePage('Jane', 'janehub'));


//--------Multi-Line Strings----------------------------------------------------------------------
/*
const profileDataArgs = process.argv.slice(2, process.argv.length);

// Option 1: 
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

//Option 2 :
const [name, github] = profileDataArgs;

const generatePage = (userName, githubName) => {
    return `
      Name: ${userName}
      GitHub: ${githubName}
    `;
  };

  console.log(name, github);
  console.log(generatePage(name, github));
*/ 
//---------------------------------------------------------------------------------
/*
  const square = (x) => { return x * x; }
 

  function square(x) { return x * x; }

  
  const square = function(x) { return x * x; }
  

  const square = x => x * x;


  All of these are valid JavaScript statements. 

*/
//---------Capturing data using process.argv --------------------------------------------------------------------------
/*
const fs = require('fs');

const generatePage = require('./src/page-template.js');


const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;


const pageHTML = generatePage(name, github);

 
  fs.writeFile('index.html', pageHTML, err => {
    if (err) throw new Error (err);
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });
*/
//----------Using Inquirer to capture data instead process.argv---------------------------------------------------------
   
 

// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

 
//   fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });

//--------- Prompting Profile Questions -----------------------------------
// const inquirer = require ('inquirer');

// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?'
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username'
//     },
//     {
//       type: 'input',
//       name: 'about',
//       message: 'Provide some information about yourself:'
//     }

//   ]);
// };
//   promptUser().then(answers => console.log(answers));

//---------------Prompting Profile Question & then Project Questions-----------------------------------------------

const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
    // will be uncommented in lesson 4
    // const pageHTML = generatePage(portfolioData);
    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);
    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });
  });