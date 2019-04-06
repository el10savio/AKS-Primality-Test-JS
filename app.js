// AKS Primality Test

function binomialCoeff(n, k) {
    if ((k === 0) || (k === n)) {
        return 1
    } else {
        return binomialCoeff(n - 1, k - 1) + binomialCoeff(n - 1, k)
    }
}

function isDivisible(value) {
    return (value % this == 0)
}

function isPrime(p) {
    if ((p === 0) || (p === 1)) {
        return true
    } else {
        let coeff = Array.from(Array(p + 1), (x, index) => binomialCoeff(p, index))
        coeff.shift()
        coeff.splice(-1, 1)
        return coeff.every(isDivisible, p)
    }

}

let p = 30
console.time("isPrime")
isPrime(p)
console.timeEnd("isPrime")
console.log(`isPrime(${p}):`, isPrime(p))