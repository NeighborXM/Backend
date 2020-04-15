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
      .get(this.userController.getUsers)
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
