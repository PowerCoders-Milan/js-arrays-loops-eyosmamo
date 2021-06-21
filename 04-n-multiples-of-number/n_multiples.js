// function declaration
const nMultiplesOf = (num, lim) => {
    const nmultiplesofArray = []
    let i = 0;
    while (nmultiplesofArray.length <= lim) {

        nmultiplesofArray.push(num * i);
        i++;
    }
    return nmultiplesofArray;
}

console.log(nMultiplesOf(2, 20))