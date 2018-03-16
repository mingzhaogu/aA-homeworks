const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits() {
  reader.question("Would you like some tea?", function (firstAnswer) {
    console.log(`${firstAnswer}`)

    reader.question("Would you like some biscuits?", function (secondAnswer) {
      console.log(`So you ${firstAnswer} want tea and you ${secondAnswer} want coffee.`)

      reader.close();
    });
  });
}
