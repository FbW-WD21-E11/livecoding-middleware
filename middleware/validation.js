export const checkValidId = (req, res, next) => {
    const {id} = req.params;
    //if ID Is not a number
    if(isNaN(id)){
        return res.status(400).json({message:'Bad request: please use a valid ID'});
    }

   next();
}