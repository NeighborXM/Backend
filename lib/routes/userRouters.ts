import {Request, Response} from "express";
import { UserController } from "../controllers/userController"

export class Routes {

  public userController: UserController = new UserController();

  public routes(app): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successful!'
      })
    })

    // User
    app.route('/user')
      //get all users
      .get((req: Request, res: Response, next: Function) => {
        //middleware
        if(req.query.key !== process.env.CRYPTO_KEY) {
          res.status(401).send('You are not permitted to view this page');
        } else {
          next();
        }
      }, this.userController.getUsers)
      //create new user
      .post(this.userController.addNewUser);

    //User Details / Editing User
    app.route('/user/:userId')
      //get specific user
      .get(this.userController.getUserWithID)
      //update specific user
      .put(this.userController.updateUser)
      .delete(this.userController.deleteUser)
  }
}
