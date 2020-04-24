import {Request, Response} from "express";
import { NeedController } from "../controllers/needController"

export class Routes {

  public NeedController: NeedController = new NeedController();

  public routes(app): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successful!'
      })
    })

    // Need
    app.route('/need')
      //get all Needs
      .get((req: Request, res: Response, next: Function) => {
        //middleware
        if(req.query.key !== process.env.CRYPTO_KEY) {
          res.status(401).send('You are not permitted to view this page');
        } else {
          next();
        }
      }, this.NeedController.getNeeds)
      //create new Need
      .post(this.NeedController.addNewNeed);

    //Need Details / Editing Need
    app.route('/need/:needId')
      //get specific Need
      .get(this.NeedController.getNeedWithID)
      //update specific Need
      .put(this.NeedController.updateNeed)
      .delete(this.NeedController.deleteNeed)
  }
}
