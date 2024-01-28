import Team from "../Model/team";
import{  Request, Response } from "express";


const expectTeamCount = 0;

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


