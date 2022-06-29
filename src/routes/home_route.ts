import { Router } from "express";
import { HomeController } from "../controllers/home_controller";

export const homeRoute = Router();

homeRoute.get("/", HomeController.index);