import { Request, Response, NextFunction } from "express";

export class HomeController {
  static index(req: Request, res: Response, next: NextFunction) {
    res.render("home", {});
  }
}