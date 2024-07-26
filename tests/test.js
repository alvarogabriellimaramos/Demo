const Fatorial = num => {
    if (num === 0 || num === 1) return num;
    let fatorial = num;
    for (let c = 1; c < num;c++) fatorial *= c;
    return fatorial;
}; 

const fatorial = Fatorial(5);

console.log(fatorial);