function fizzBuzz(amount) {
    for (let index = 1; index <= amount; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log(index+" => FizzBuzz");
        } else if(index % 3 === 0) {
            console.log(index+" => Fizz");
        } else if(index % 5 === 0){
            console.log(index+" => Buzz");
        } else {
            console.log(index);
        }
    }
}

fizzBuzz(20)