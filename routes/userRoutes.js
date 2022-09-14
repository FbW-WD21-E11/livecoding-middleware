import express from 'express';

import {logging, loggingtime, logCombination} from '../middleware/logging.js';

const router = express.Router();

router.get('/',logCombination, (req, res) => {
    res.send("Hello from user routes")
})


export default router;