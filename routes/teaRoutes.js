import express from 'express';
import { authenticate } from '../middleware/authenticateUser.js';
import { logCombination } from '../middleware/logging.js';
import { checkValidId } from '../middleware/validation.js';

const router = express.Router();

const teas = [
    {id:1, name:'Green Tea'},
    {id:2, name:'Oolong Tea'},
    {id:3, name:'Sencha Tea'},
    {id:4, name:'Bio Tea'}
 ]
//register user for full router module using router.use
router.use(logCombination);

//this is the main route, nothing is following
//GET to http://localhost:3000/tea
router.get('/', authenticate, (req, res) => {
   return res.status(200).json(teas);
});

//by id 
//GET to http://localhost:3000/tea/1
router.get('/:id', checkValidId, (req, res) => {
    const teaId = req.params.id;
    const tea = teas.find(t => t.id == teaId);
 
     if(!tea){
         return res.status(404).json({ message:`Tea with id ${teaId} not found.` })
     }
 
    return res.status(200).json(tea)
 });

 //Creating a new tea
 router.post('/new', (req,res) => {

    //console.log("request object", req);
    //console.log("request body ", req.body);
    const newId = Math.max.apply(Math, teas.map(function(tea) { return tea.id; })) + 1
    const {name, flavour, price} = req.body; 

    //create new object to add to the array
    const newTea = {
        id:newId,
        name:name, 
        flavour, 
        price
    }

    teas.push(newTea);

    return res.status(200).json({teas:teas});
})

export default router;