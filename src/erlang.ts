import "reflect-metadata";
import ejs = require("ejs");
import path = require("path");
import cors = require("cors");
import env = require("dotenv");
import * as morgan from "morgan";
import { Logger } from "./config";
import express = require("express");
var session = require("express-session");
import bodyParser = require("body-parser");
import createError = require("http-errors");
import cookieParser = require("cookie-parser");
import { apiRoute, browseRoute,homeRoute } from "./routes";
import { NextFunction, Request, Response } from "express";

env.config();
(async function () {
  try {

    let whitelisted = [
      "127.0.0.1:5559",
      "http://localhost:5559"
    ];
    let corsOptions = {
      origin: function (origin: any, callback: any) {
        if (whitelisted.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
      preflightContinue: false,
      optionsSuccessStatus: 200,
      methods: "POST, GET, HEAD, OPTIONS",
      allowedHeaders: [
        "Origin",
        "Accept",
        "Signature",
        "Timestamp",
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Digest-Method",
        "Signed-Fields",
      ],
    };

    // create express app
    const app = express();

    // view engine setup
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");

    app.set("port", 5559);
    app.use(morgan("dev"));
    app.use(bodyParser.json());
    app.use(cookieParser("Erlang_"));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, "public")));
    // momery unleaked
    app.set("trust proxy", 1);

    app.use(
      session({
        resave: false,
        secret: "Erlang_",
        cookie: {
          // secure: true,
          maxAge: 60000,
        },
        saveUninitialized: true,
      })
    );

    app.use(
      express.static(path.join(__dirname, "../node_modules/jquery/dist/"))
    );
    app.use(
      express.static(path.join(__dirname, "../node_modules/bootstrap/dist/"))
    );

    app.use((req: Request, res: Response, next: NextFunction) => {
      req.headers.origin = req.headers.origin || req.headers.host;
      // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });

    // routes
    app.use("/calculate", browseRoute);
    app.use("/",homeRoute);

    // Api
    app.use(cors(corsOptions));
    app.use("/api/v1", apiRoute);

    app.use("*", (req: Request, res: Response, next: NextFunction) => {
      const error: any = new Error(
        `${req.ip} tried to access ${req.originalUrl}`
      );
      error.statusCode = 301;
      next(error);
    });

    // catch 404 and forward to error handler
    app.use((req: Request, res: Response, next: NextFunction) => {
      Logger.error(
        `[${req.ip}][${req.method}] ${req.originalUrl} ${
          req.method === "POST" ? "\n\r" + JSON.stringify(req.body) : ""
        }`
      );
      next(createError(404));
    });

    // error handler
    app.use((error: any, req: Request, res: Response, next: NextFunction) => {
      if (!error.statusCode) error.statusCode = 500;

      if (error.statusCode === 301) {
        return res.status(301).redirect("/not-found");
      }
      Logger.error(error);
      return res.status(error.statusCode).json({ error: error.toString() });
    });

    // start express server
    let server: any = app.listen(
      process.env.PORT || app.get("port"),
      "0.0.0.0",
      function () {
        const data: any = server.address();
        Logger.info(
          `Erlang init on: http://${data["address"]}:${data["port"]}`
        );
      }
    );
  } catch (error) {
    Logger.error(error);
  }
})();
