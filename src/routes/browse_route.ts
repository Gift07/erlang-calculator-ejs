import { Router } from "express";
import { BrowseController } from "../controllers";

export const browseRoute = Router();

browseRoute.get("/", BrowseController.index);
