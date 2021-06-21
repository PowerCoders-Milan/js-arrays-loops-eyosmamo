// define your function here

const multiplesOf = (num, lim) => {
    const multiples = [];
    for (let i = 1; i <= lim; i++) {
        multiples.push(num * i);
    }
    return multiples;

}

console.log(multiplesOf(5, 10));