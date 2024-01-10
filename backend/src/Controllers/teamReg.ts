import TeamRegi from "../Model/TeamRegistration";
import{  Request, Response } from "express";

export const TeamRegister = async (req: Request, res: Response) => {
  // console.log("", req.body)
  try {
    const newSession = new TeamRegi({
      teamname: req.body.teamname,
      university: req.body.university,
      name_m1: req.body.name_m1,
      year_m1: req.body.year_m1,
      whatsappno_m1: req.body.whatsappno_m1,
      email_m1: req.body.email_m1,
      nic_m1: req.body.nic_m1,
      name_m2: req.body.name_m2,
      year_m2: req.body.year_m2,
      whatsappno_m2: req.body.whatsappno_m2,
      email_m2: req.body.email_m2,
      nic_m2: req.body.nic_m2,
      name_m3: req.body.name_m3,
      year_m3: req.body.year_m3,
      whatsappno_m3: req.body.whatsappno_m3,
      email_m3: req.body.email_m3,
      nic_m3: req.body.nic_m3,
      name_m4: req.body.name_m4,
      year_m4: req.body.year_m4,
      whatsappno_m4: req.body.whatsappno_m4,
      email_m4: req.body.email_m4,
      nic_m4: req.body.nic_m4,
    });
    await newSession.save();

    res.status(200).json({
      success: true,
      message: "Team Registered successfully",
      data: newSession,
    });
    
  } catch (err) {
    res.send(err)
    console.log(err)
  }
};