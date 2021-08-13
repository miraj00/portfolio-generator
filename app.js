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

//------------------------- Spread Operator --------------------------------------

// const originalAnimalArr = ['Dog', 'Cat', 'Horse'];

// const workingAnimalArr = originalAnimalArr;
// workingAnimalArr.push('Bird');
// In this .push function it's adding "Bird" to both of the arrays. 


// Let's say we have an array of data that we want to work with but never directly affect, such as an array of animals. We want to work with the data in the array of animals, but we want to keep the original array untouched.
// spread operator helps in this.
// const originalAnimalArr = ['Dog', 'Cat', 'Horse'];
// const workingAnimalArr = [...originalAnimalArr];

//------------------------- the Rest Operator -------------------------------------

// const finishOrder = [
//   'Speed Racer',
//   'Flash Marker Jr.',
//   'Racer X',
//   'Snake Oiler',
//   'Trixie',
//   'Grey Ghost',
//   'Taejo Togokhan'
// ];

// const [first, second, third, ...theRest] = finishOrder;

// The rest operator (...theRest), which packages leftover data under a new array or object—depending on what the source of the data is

//------------------------ .map method ---------------------------------------------
// const animalArr = ['Dogs', 'Cats', 'Horses', 'Birds'];

// const coolAnimalArr = animalArr.map(animal => {
//   console.log(animal);
//   return `${animal} are really cool animals.`;
// });

//---------------------.filter method -------------------------------------------

// const ageArr = [21, 58, 8, 16, 106, 83, 42, 2, 0];

// const over21Arr = ageArr.filter(age => {
//   if (age >= 21) {
//     return true;
//   } else {
//     return false;
//   }
// });
// => [21, 58, 106, 83, 42];

//--------------ES6 feature called shorthand property names ----------------
//this is same .... 
     // module.exports = {
     //   writeFile: writeFile,
     //   copyFile: copyFile
     // };

// // ... as this (shorthand property names): -
     // module.exports = { writeFile, copyFile };

//---------------Prompting Profile Question & then Project Questions-----------------------------------------------

const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

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
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });




// -----------Pyramid of Doom / call back Hell way of writing code -----------------------------------
// promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
    
//    const pageHTML = generatePage(portfolioData);



//   fs.writeFile('./dist/index.html', pageHTML, err => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log('Page created! Check out index.html in this directory to see it!');
    
//   fs.copyFile('./src/style.css', './dist/style.css', err => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log('Style sheet copied successfully!');  
        
//     });

//   });

//---------------Mock Data --------------------------------------------------------------

  // const pageHTML = generatePage(mockData);

  // const mockData = {
  //   name: 'Lernantino',
  //   github: 'lernantino',
  //   confirmAbout: true,
  //   about:
  //     'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
  //   projects: [
  //     {
  //       name: 'Run Buddy',
  //       description:
  //         'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
  //       languages: ['HTML', 'CSS'],
  //       link: 'https://github.com/lernantino/run-buddy',
  //       feature: true,
  //       confirmAddProject: true
  //     },
  //     {
  //       name: 'Taskinator',
  //       description:
  //         'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
  //       languages: ['JavaScript', 'HTML', 'CSS'],
  //       link: 'https://github.com/lernantino/taskinator',
  //       feature: true,
  //       confirmAddProject: true
  //     },
  //     {
  //       name: 'Taskmaster Pro',
  //       description:
  //         'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
  //       languages: ['JavaScript', 'jQuery', 'CSS', 'HTML', 'Bootstrap'],
  //       link: 'https://github.com/lernantino/taskmaster-pro',
  //       feature: false,
  //       confirmAddProject: true
  //     },
  //     {
  //       name: 'Robot Gladiators',
  //       description:
  //         'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque.',
  //       languages: ['JavaScript'],
  //       link: 'https://github.com/lernantino/robot-gladiators',
  //       feature: false,
  //       confirmAddProject: false
  //     }
  //   ]
  // };