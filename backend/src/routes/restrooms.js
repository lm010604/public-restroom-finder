import { Router } from 'express';
import { getAllRestrooms } from '../controllers/restroomController.js';

const restroomRouter = Router();

restroomRouter.get("/", getAllRestrooms);

export default restroomRouter;