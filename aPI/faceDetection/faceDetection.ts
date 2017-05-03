import {Router, Request, Response, NextFunction} from 'express';
import * as logger from 'morgan';
var sharp = require('sharp');
var cv = require('opencv');

export class FaceDetection {
  router: Router
  camera: any;

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  public canvasToWebp(canvas, callback) {
    / camera properties
    var camWidth = 320;
    var camHeight = 240;
    var camFps = 10;
    var camInterval = 1000 / camFps;
    // initialize camera
    this.camera = new cv.VideoCapture(0);
    this.camera.setWidth(camWidth);
    this.camera.setHeight(camHeight);
    face detection properties
    var rectColor = [255, 255, 255];
    var rectThickness = 1;
    this.camera.read(function(err, im) {
      if (err) throw err;

      im.detectObject('./node_modules/opencv/data/haarcascade_frontalface_alt2.xml', {}, function(err, faces) {
        if (err) throw err;

        for (var i = 0; i < faces.length; i++) {
          var face = faces[i];
          im.rectangle([face.x, face.y], [face.width, face.height], rectColor, rectThickness);
        }

        // socket.emit('frame', { buffer: im.toBuffer() });
        // res.send({ buffer: im.toBuffer() });
        sharp(canvas.toBuffer()).toFormat(sharp.format.webp).toBuffer(function(e, webpbuffer) {
          var webpDataURL = 'data:image/png;base64,' + webpbuffer.toString('base64');
          callback(webpDataURL);
        });
      });
    }); 
  }

  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send("formAC:"+JSON.stringify(req.body));
  }

  /**
   * GET one hero by id
   */
  public getOne(req: Request, res: Response, next: NextFunction) {
    res.send("formAB:"+req.params._body+req.params.body+req.params.form);
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
    this.startOpenCV();
  }

  startOpenCV(){
   
  }

}

// Create the HeroRouter, and export its configured Express.Router
const faceDetection = new FaceDetection();
faceDetection.init();

export default faceDetection.router;