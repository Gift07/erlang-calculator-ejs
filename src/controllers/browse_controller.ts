import { Request, Response, NextFunction } from "express";

export class BrowseController {
  static index(req: Request, res: Response, next: NextFunction) {
    res.render("index", {});
  }
}
