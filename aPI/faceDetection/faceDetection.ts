import {Router, Request, Response, NextFunction} from 'express';
import * as logger from 'morgan';

export class FaceDetection {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send("formA:"+JSON.stringify(req.body));
  }

  /**
   * GET one hero by id
   */
  public getOne(req: Request, res: Response, next: NextFunction) {
    res.send("formA:"+req.params._body+req.params.body+req.params.form);
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getOne);
    this.router.post('/', this.getAll);
    this.router.post('/:id', this.getOne);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const faceDetection = new FaceDetection();
faceDetection.init();

export default faceDetection.router;