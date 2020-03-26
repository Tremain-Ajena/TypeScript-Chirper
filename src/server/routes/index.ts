import {Router} from 'express';
// "import * as express from 'express';" is the same as the line of code above
import chirpsRouter from './chirps'

const router = Router();

router.use('/chirps', chirpsRouter);

export default router;
