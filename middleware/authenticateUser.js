export const authenticate = (req, res, next) => {
    console.log("query paremeters", req.query);
    //check for parameter secret in the body or the query param
    if(req.body.secret == null && req.query.secret == null){
        return res.status(401).json({responsecode:401, responsemessage:'Unautorized'});
    }

    console.log("You have permission to access this route");
    //to continue to the next middleware function/route handler
    next();
}