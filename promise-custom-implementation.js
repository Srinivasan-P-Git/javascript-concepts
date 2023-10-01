class MyPromise {
  #isResolved = false;
  #isRejected = false;
  #isFulFilled = false;
  #fullFilledResult = null;

  constructor(fn) {
    const resolve = (resp) => {
      if (!this.isFulFilled) {
        this.#isResolved = true;
        this.#isFulFilled = true;
        this.#fullFilledResult = resp;
      }
    };

    const reject = (err) => {
      if (!this.isFulFilled) {
        this.#isRejected = true;
        this.#isFulFilled = true;
        this.#fullFilledResult = err;
      }
    };

    fn(resolve, reject);
  }

  get isResolved() {
    return this.#isResolved;
  }

  get isRejected() {
    return this.#isRejected;
  }

  get isFulFilled() {
    return this.#isFulFilled;
  }

  get fullFilledResult() {
    return this.#fullFilledResult;
  }

  then(fn) {
    if (this.isResolved) {
      fn(this.fullFilledResult);
    }
    return this;
  }

  catch(fn) {
    if (this.isRejected) {
      fn(this.fullFilledResult);
    }
    return this;
  }
}

const a = new MyPromise((res, rej) => {
  res("Hi");
});

a.then(console.log).catch(console.log);
