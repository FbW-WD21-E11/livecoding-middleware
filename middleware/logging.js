/**
 * Logging information about the request (middleware function)
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const logging = (req, res, next) => {
    console.log("I am in the middle");
    console.log("The request method in this request is", req.method);
    next();
}

/**
 * Logging the time of a request
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const loggingtime = (req, res, next) => {
    console.log("The time of the request is: ", new Date().toLocaleString());
    next();
}

export const logCombination = [logging,loggingtime];