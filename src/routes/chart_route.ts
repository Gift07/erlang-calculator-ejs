import { Router } from "express";
import { ChartController } from "../controllers";

export const chartRoute = Router();

chartRoute.get("/", ChartController.index);