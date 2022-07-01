import { Request, Response, NextFunction } from "express";

export class ChartController {
  static index(req: Request, res: Response, next: NextFunction) {
    res.render("chart", {});
  }
}