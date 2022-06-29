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
      url: "http://127.0.0.1:8000/api/number-server",
      body: {
        prob: req.body["prob"],
        offerLoad: req.body["offer_load"],
      },
    };

    request(options, async (error, response, body) => {
      if (error) {
        res.status(200).json({ status: false, message: error });
      } else {
        const {answer} = body
        res.status(200).json({ status: true, message: answer });
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
      url: "http://127.0.0.1:8000/api/waiting-probability",
      body: {
        offerLoad: req.body["offer_load"],
        channelNum: req.body["channel_num"],
      },
    };

    request(options, async (error, response, body) => {
      if (error) {
        res.status(200).json({ status: false, message: error });
      } else {
        const {answer} = body;
        res.status(200).json({ status: true, message: answer });
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
      url: "http://127.0.0.1:8000/blocking-probability",
      body: {
        offerLoad: req.body["offer_load"],
        channelNum: req.body["channel_num"],
      },
    };

    request(options, async (error, response, body) => {
      if (error) {
        res.status(200).json({ status: false, message: error });
      } else {
        const {answer} = body
        res.status(200).json({ status: true, message: answer });
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
      url: "http://127.0.0.1:8000/number-channel",
      body: {
        prob: req.body["prob"],
        offerLoad: req.body["offer_load"],
      },
    };

    request(options, async (error, response, body) => {
      if (error) {
        res.status(200).json({ status: false, message: error });
      } else {
        const {answer} = body;
        res.status(200).json({ status: true, message: answer });
      }
    });
  }
  static erlangbOfferedLoad(req: Request, res: Response, next: NextFunction) {
    console.log(res)
    const options = {
      json: true,
      method: "POST",
      headers: {
        "Accept-Charset": "utf-8",
        Accept: "application/json",
        "User-Agent": "my-reddit-client",
      },
      url: "http://127.0.0.1:8000/offered-load",
      body: {
        holdTime: req.body["holding_time"],
        arrivalRate: req.body["arrival_rate"],
      },
    };
    
    request(options, async (error, response, body) => {
      const {answer} = body;
      if (error) {
        res.status(200).json({ status: false, message: error });
      } else {
        res.status(200).json({ status: true, message: answer });
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
      url: "http://127.0.0.1:8000/hold-time",
      body: {
        offerLoad: req.body["offer_load"],
        arrivalRate: req.body["arrival_rate"],
      },
    };

    request(options, async (error, response, body) => {
      if (error) {
        res.status(200).json({ status: false, message: error });
      } else {
        const {answer} = body;
        res.status(200).json({ status: true, message: answer });
      }
    });
  }

  static arrivalRate(req: Request, res: Response, next: NextFunction) {
    const options = {
      json: true,
      method: "POST",
      headers: {
        "Accept-Charset": "utf-8",
        Accept: "application/json",
        "User-Agent": "my-reddit-client",
      },
      url: "http://127.0.0.1:8000/arrival-rate",
      body: {
        holdTime: req.body["hold_time"],
        offerLoad: req.body["offer_load"],       
      },
    };

    request(options, async (error, response, body) => {
      if (error) {
        res.status(200).json({ status: false, message: error });
      } else {
        const {answer} = body;
        res.status(200).json({ status: true, message: answer });
      }
    });
  }
}
