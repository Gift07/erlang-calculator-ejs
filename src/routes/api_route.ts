import { Router } from "express";
import { ApiController } from "../controllers";

export const apiRoute = Router();

apiRoute.post("/erlangb-holdtime", ApiController.holdTime)
apiRoute.post("/erlangc-server", ApiController.erlangcServer)
apiRoute.post("/erlangb-arrivalrate", ApiController.arrivalRate)
apiRoute.post("/erlangc-waitprob", ApiController.erlangcWaitprob)
apiRoute.post("/erlangb-block-prob", ApiController.erlangbBlockProb)
apiRoute.post("/erlangb-channel-num", ApiController.erlangbChannelNum)
apiRoute.post("/erlangb-offered-load", ApiController.erlangbOfferedLoad)
