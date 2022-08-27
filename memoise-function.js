let fibonacci = n => {
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let memoise = fn => {
    let map = new Map();
    return (...args) => {
        let key = args.join(" ");
        if (map.has(key)) return map.get(key);
        let result = fn(...args);
        map.set(key, result);
        return result;
    }
}

let memoisedFibonacci = memoise(fibonacci);
console.log(memoisedFibonacci(42)); // Some delay
console.log(memoisedFibonacci(42)); // No delay - Instantaneous