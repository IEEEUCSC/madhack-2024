import Session from "../Model/session";
import{  Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  // console.log("", req.body)
  try {
    const newSession = new Session({
      email: req.body.email,
      name: req.body.name,
      number: req.body.number,
      university: req.body.university,
      year: req.body.year,
    });
    await newSession.save();

    res.status(200).json({
      success: true,
      message: "Registered successfully",
      data: newSession,
    });
    
  } catch (err) {
    res.send(err)
    console.log(err)
  }
};