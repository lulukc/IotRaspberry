import { Router } from 'express';
import RaspController from './Controllers/RaspController';

const router = Router();

router.get('/teste', RaspController.index);
router.get('/teste1', RaspController.store);

export default router;
