//Custom Error Objects can be created by extending the built-in 'Error' object

class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Authentication Error";
    }
}

function login(userName, password) {
    try {
        if (userName === "test" && password === 1234) return true;
        else throw new AuthenticationError("Invalid Credentials");
    } catch(e) {
        if(e instanceof AuthenticationError) {
            //Since we are catching the error here, stack trace of the error will not appear in console
            //Store Invalid Attempts of the user
            //And Show proper message on UI
        }
    }
}