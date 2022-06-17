import request = require("request");
import { Request, Response, NextFunction } from "express";

export class ApiController {
  static erlangcServer(req: Request, res: Response, next: NextFunction) {
    const options = {
      json: true,
      method: "POST",
      headers: {
        "Accept-Charset": "utf-8",
        Accept: "application/json",
        "User-Agent": "my-reddit-client",
      },
      url: "http://127.0.0.1:8000/erlangC/server",
      body: {
        prob: req.body["prob"],
        offerLoad: req.body["offer_load"],
      },
    };

    request(options, async (error, response, body) => {
      if (error) {
        res.status(200).json({ status: false, message: error });
      } else {
        res.status(200).json({ status: true, message: body });
      }
    });
  }
  static erlangcWaitprob(req: Request, res: Response, next: NextFunction) {
    const options = {
      json: true,
      method: "POST",
      headers: {
        "Accept-Charset": "utf-8",
        Accept: "application/json",
        "User-Agent": "my-reddit-client",
      },
      url: "http://127.0.0.1:8000/erlangC/waitprob",
      body: {
        offerLoad: req.body["offer_load"],
        channelNum: req.body["channel_num"],
      },
    };

    request(options, async (error, response, body) => {
      if (error) {
        res.status(200).json({ status: false, message: error });
      } else {
        res.status(200).json({ status: true, message: body });
      }
    });
  }
  static erlangbBlockProb(req: Request, res: Response, next: NextFunction) {
    const options = {
      json: true,
      method: "POST",
      headers: {
        "Accept-Charset": "utf-8",
        Accept: "application/json",
        "User-Agent": "my-reddit-client",
      },
      url: "http://127.0.0.1:8000/erlangB/blockprob",
      body: {
        offerLoad: req.body["offer_load"],
        channelNum: req.body["channel_num"],
      },
    };

    request(options, async (error, response, body) => {
      if (error) {
        res.status(200).json({ status: false, message: error });
      } else {
        res.status(200).json({ status: true, message: body });
      }
    });
  }
  static erlangbChannelNum(req: Request, res: Response, next: NextFunction) {
    const options = {
      json: true,
      method: "POST",
      headers: {
        "Accept-Charset": "utf-8",
        Accept: "application/json",
        "User-Agent": "my-reddit-client",
      },
      url: "http://127.0.0.1:8000/erlangB/channelNum",
      body: {
        prob: req.body["prob"],
        offerLoad: req.body["offer_load"],
      },
    };

    request(options, async (error, response, body) => {
      if (error) {
        res.status(200).json({ status: false, message: error });
      } else {
        res.status(200).json({ status: true, message: body });
      }
    });
  }
  static erlangbOfferedLoad(req: Request, res: Response, next: NextFunction) {
    const options = {
      json: true,
      method: "POST",
      headers: {
        "Accept-Charset": "utf-8",
        Accept: "application/json",
        "User-Agent": "my-reddit-client",
      },
      url: "http://127.0.0.1:8000/offeredLoad",
      body: {
        holdTime: req.body["hold_time"],
        arrivalRate: req.body["arrival_rate"],
      },
    };

    request(options, async (error, response, body) => {
      if (error) {
        res.status(200).json({ status: false, message: error });
      } else {
        res.status(200).json({ status: true, message: body });
      }
    });
  }

  static holdTime(req: Request, res: Response, next: NextFunction) {
    const options = {
      json: true,
      method: "POST",
      headers: {
        "Accept-Charset": "utf-8",
        Accept: "application/json",
        "User-Agent": "my-reddit-client",
      },
      url: "http://127.0.0.1:8000/holdtime",
      body: {
        offerLoad: req.body["offer_load"],
        arrivalRate: req.body["arrival_rate"],
      },
    };

    request(options, async (error, response, body) => {
      if (error) {
        res.status(200).json({ status: false, message: error });
      } else {
        res.status(200).json({ status: true, message: body });
      }
    });
  }

  static arrivalRate(req: Request, res: Response, next: NextFunction) {

    console.log({
      holdTime: req.body["hold_time"],
      offerLoad: req.body["offer_load"],
    })

    
    const options = {
      json: true,
      method: "POST",
      headers: {
        "Accept-Charset": "utf-8",
        Accept: "application/json",
        "User-Agent": "my-reddit-client",
      },
      url: "http://127.0.0.1:8000/arrivalrate",
      body: {
        holdTime: req.body["hold_time"],
        offerLoad: req.body["offer_load"],
      },
    };

    request(options, async (error, response, body) => {
      if (error) {
        res.status(200).json({ status: false, message: error });
      } else {
        res.status(200).json({ status: true, message: body });
      }
    });
  }
}
