const readline = require('readline');
const answers = []

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Great name: ${answer}`);
  answers.push(`${answer}`);
  rl.question('What is an activity you like doing? ', (answer) => {
    console.log(`Sounds fun!: ${answer}`);
    answers.push(`${answer}`);
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Sets the mood huh? Nice: ${answer}`);
      answers.push(`${answer}`);
      rl.question('Which meal is your favourite? ', (answer) => {
        console.log(`Good choice: ${answer}`);
        answers.push(`${answer}`);
        rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Mmm tasty: ${answer}`);
          answers.push(`${answer}`);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`I mean, is there any better sport?: ${answer}`);
            answers.push(`${answer}`);
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
                console.log(`Bruh, you're clearly gifted: ${answer}`);
                answers.push(`${answer}`);
                console.log(`Based on your sweet answers its safe to say that ${answers[0]} loves to get into the mood listening to ${answers[2]} while they eat ${answers[3]}. 
As far as meals go nothing outshines ${answers[4]}, ever. Rumour has it that they use their superpower, ${answers[6]}, to 
absolutely dominate at play ${answers[5]}. Pretty impressive stuff, ${answers[0]}.`)

                  rl.close();
                });
              });
            });
          });
        });
      });
    });













