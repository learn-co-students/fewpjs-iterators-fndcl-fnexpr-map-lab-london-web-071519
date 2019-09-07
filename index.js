const tutorials = [
  "what does the this keyword mean?",
  "What is the Contutorialuctor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

const titleCased = () =>
  tutorials.map(tutorial => {
    return tutorial
      .split(" ")
      .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });

// let students = ["harry", "ron", "hermione", "ginevra"];
// let rollcall = [];

// const wizardry = arr => {
//   for (const name of arr) {
//     rollcall.push(`${name}, the wizard`);
//   }
// };

// wizardry(students);

// const robots = [
//   {
//     name: "Johnny 5",
//     modes: 5,
//     isActivated: false
//   },
//   {
//     name: "C3PO",
//     modes: 3,
//     isActivated: false
//   },
//   {
//     name: "Sonny",
//     modes: 2.5,
//     isActivated: false
//   },
//   {
//     name: "Baymax",
//     modes: 1.5,
//     isActivated: false
//   }
// ];

// const activate = robots.map(robot =>
//   Object.assign({}, robot, {
//     modes: robot.modes * 2,
//     isActivated: true
//   })
// );
