const readline = require('readline');
const answers = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`\nOh hey, what's your name? `, (answer) => {
  console.log(`Great name, ${answer}.\n`);
  answers["Name"] = answer;

  rl.question(`What's your go-to hobby these days? `, (answer) => {
    console.log(`Sounds like ${answer} is a vibe.\n`);
    answers["Hobby"] = answer;

    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`There's nothing like ${answer} to set the mood huh?\n`);
      answers["Music"] = answer;

      rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
        console.log(`Mmm tasty ${answer}\n`);
        answers["Food"] = answer;

        rl.question(`What is your absolute favourite sport? `, (answer) => {
           console.log(`I mean, is there any sport better than ${answer}?\n`);
           answers["Sport"] = answer;

           rl.question(`What's your superpower? Even the smallest thing. `, (answer) => {
              console.log(`Bruh, ${answer}, you're clearly gifted. \n`);
              answers["Superpower"] = answer;
                //console.log(answers);
              console.log(`Please wait while we generate your dope bio:\n`)

  setTimeout(() => console.log(`Based on our sweet analysis its safe to say that ${answers["Name"]} loves to get into the mood listening to ${answers["Music"]} while they're ${answers["Hobby"]}. 
As far as meals go nothing outshines ${answers["Food"]}, ever. Rumour has it that they use their superpower, ${answers["Superpower"]}, to 
absolutely dominate at ${answers["Sport"]}. Pretty impressive stuff, ${answers["Name"]}.\n`), 3500)

                  rl.close();
                });
              });
            });
          });
        });
      });













