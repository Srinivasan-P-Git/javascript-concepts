Array.prototype.myCustomMap = function (fn) {
    let result = [];
    for (let i = 0, len = this.length; i < len; i++) {
        result.push(fn(this[i], i));
    }
    return result;
}

Array.prototype.myCustomFilter = function (fn) {
    let result = [];
    for (let i = 0, len = this.length; i < len; i++) {
        if (fn(this[i])) result.push(this[i]);
    }
    return result;
}

Array.prototype.myCustomReduce = function (fn, result) {
    for (let i = 0, len = this.length; i < len; i++) {
        result = fn(result, this[i]);
    }
    return result;
}

Array.prototype.myCustomForEach = function (fn) {
    for (let i = 0, len = this.length; i < len; i++) {
        fn(this[i]);
    }
}

Array.prototype.myCustomFlat = function (depth = 1) {
    let flat = (array, depth) => {
        let result = [];
        for (let i = 0, len = array.length; i < len; i++) {
            if (Array.isArray(array[i]) && depth > 0) result = result.concat(flat(array[i], depth - 1));
            else result.push(array[i]);
        }
        return result;
    }
    return flat(this, depth);
}

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let fulfilledPromises = 0;
        let result = new Array(promises.length);
        promises.forEach((promise, index) => {
            promise.then(res => {
                fulfilledPromises++;
                result[index] = res;
                if (fulfilledPromises === promises.length) resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    })
}

function promiseAny(promises) {
    return new Promise((resolve, reject) => {
        let rejectedPromises = 0;
        promises.forEach(promise => {
            promise.then(res => {
                resolve(res);
            }).catch(() => {
                rejectedPromises++;
                if (rejectedPromises === promises.length) reject("All Promises Rejected");
            })
        })
    })
}

function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    })
}

Function.prototype.myCustomCall = function (thisArg, ...args) {
    thisArg.fn = this;
    thisArg.fn(...args);
}

Function.prototype.myCustomApply = function (thisArg, argsArray) {
    thisArg.fn = this;
    thisArg.fn(...argsArray);
}

Function.prototype.myCustomBind = function(thisArg, ...args) {
    thisArg.fn = this;
    return () => {
        thisArg.fn(...args);
    }
}
