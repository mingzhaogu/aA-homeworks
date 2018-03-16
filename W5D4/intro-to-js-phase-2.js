// ## FIZZBUZZ

function fizzBuzz(array) {
  let result = []

  for(let i = 0; i < array.length; i++) {
    if (array[i] % 15 === 0) {
      continue;
    }
    if (array[i] % 3 === 0 || array[i] % 5 === 0)
      result.push(array[i]);
    } else {
      continue;
    }
  }

  console.log(result);
}

fizzBuzz([1, 3, 5, 2, 51, 8, 15, 47])
