import { Request, Response } from 'express';
import StatusControoler from './StatusControler';

class RaspController {
  index(req: Request, res: Response) {
    return res.json(StatusControoler.statusDoRele);
  }

  store(req: Request, res: Response) {
    const { numeroDoRele } = req.query;
    StatusControoler.acionarRele(numeroDoRele);
    return res.json(StatusControoler.statusDoRele[numeroDoRele - 1]);
  }
}

export default new RaspController();
