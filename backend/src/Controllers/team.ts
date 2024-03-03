import Team from "../Model/team";
import{  Request, Response } from "express";
import dotenv from "dotenv";


dotenv.config();

const AUTH_KEY = process.env.AUTH_KEY || "";


const expectTeamCount = 65;

const teamCount = async (): Promise<number> => { 
  try {
    const count = await Team.countDocuments({});
    console.log("Number of teams:", count);
    return count;
  } catch (err) {
    console.error('Error counting teams:', err);
    throw err;
  }
}


export const register = async (req: Request, res: Response) => {


// count teams and return if 50 teams are already registered
  const count = await teamCount();

  if (count >= expectTeamCount) {

    res.status(200).json({
      success: false,
      message: "Registration is currently closed because the maximum number of teams has been reached.",
    });
    return;
  }
  else {


  try {
    const newSession = new Team({
      teamName: req.body.teamName,
      university: req.body.university,
      other: req.body.other,
      leaderName: req.body.leaderName,
      leaderYear: req.body.leaderYear,
      leaderWhatsapp: req.body.leaderWhatsapp,
      leaderEmail: req.body.leaderEmail,
      leaderNIC: req.body.leaderNIC,
      member1Name: req.body.member1Name,
      member1Year: req.body.member1Year,
      member1Whatsapp: req.body.member1Whatsapp,
      member1Email: req.body.member1Email,
      member1NIC: req.body.member1NIC,
      member2Name: req.body.member2Name,
      member2Year: req.body.member2Year,
      member2Whatsapp: req.body.member2Whatsapp,
      member2Email: req.body.member2Email,
      member2NIC: req.body.member2NIC,
      member3Name: req.body.member3Name,
      member3Year: req.body.member3Year,
      member3Whatsapp: req.body.member3Whatsapp,
      member3Email: req.body.member3Email,
      member3NIC: req.body.member3NIC,
    });
    await newSession.save();

    res.status(200).json({
      success: true,
      message: "Registered successfully",
      data: newSession,
    });
    
  } catch (err) {

    res.status(500).json({
      success: false,
      message: "Registration failed",
      data: err,
    });
    console.log(err)

   
  }

}



};



export const count = (req: Request, res: Response): void => {
  Team.countDocuments({}).then(count => {
    console.log("Number of teams:", count);
    res.status(200).json({ teamCount: expectTeamCount - count });
  }).catch(err => {
    console.error('Error counting teams:', err);
    res.status(500).send('Error counting teams');
  });
};



// get teams , autherization key is required

export const authorizeLogin = async (req: Request, res: Response) => {
  try {
    let teams = await Team.find({teamName: req.body.teamname});
    if (teams.length == 0) {
      teams = await Team.find({teamName: req.body.teamname + " "}); // some team names have a space at the end
    }
    console.log((req.body))
    console.log(teams)
    if (teams.length === 0) {
        res.status(200).json({
            success: false,
            message: "Team not found",
        });
        return;
    } else {
      for (let team of teams) {
        if ((await team).leaderNIC === req.body.nic || (await team).member1NIC === req.body.nic || (await team).member2NIC === req.body.nic || (await team).member3NIC === req.body.nic) {
          res.status(200).json({
            success: true,
            message: ""
          });
          return;
        }
      }
      res.status(200).json({
        success: false,
        message: "Invalid NIC. Please use the NIC of any member of the team.",
      });
      return;
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching teams",
      data: err,
    });
  }
}

export const getTeams = async (req: Request, res: Response) => {
  const authKey = req.headers.authorization;
  if (authKey !== AUTH_KEY) {
    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
    return;
  }
  try {
    const teams = await Team.find({});
    res.status(200).json({
      success: true,
      message: "Teams fetched successfully",
      data: teams,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching teams",
      data: err,
    });
  }
};


