import * as mongoose from 'mongoose';
import { NeedSchema } from '../models/needModel';
import { Request, Response } from 'express';

const Need = mongoose.model('Need', NeedSchema);

export class NeedController{

  public addNewNeed (req: Request, res: Response) {
    let newNeed = new Need(req.body);

    newNeed.save((err, Need) => {
      if(err){
        res.send(err);
      }
      res.json(Need);
    });
  }

  public getNeeds (req: Request, res: Response) {
    Need.find({}, (err, Need) => {
      if(err){
        res.send(err);
      }
      res.json(Need);
    })
  }

  public getNeedWithID (req: Request, res: Response) {
    Need.findById(req.params.NeedId, (err, Need) => {
      if(err){
        res.send(err);
      }
      res.json(Need);
    })
  }

  public updateNeed (req: Request, res: Response) {
    Need.findOneAndUpdate({ _id: req.params.NeedId}, req.body, {new: true }, (err, Need) => {
      if(err){
        res.send(err);
      }
      res.json(Need);
    })
  }

  public deleteNeed (req: Request, res: Response) {
    Need.remove({ _id: req.params.NeedId}, (err, Need) => {
      if(err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted Need!'})
    });
  }
}
