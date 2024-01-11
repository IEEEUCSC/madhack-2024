import Team from "../Model/team";
import{  Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  // console.log("", req.body)

  console.log(req.body)


// //{
//   teamName: 'Megane Frami',
//   university: 'University of Ruhuna',
//   other: 'Culpa sapiente animi provident quod voluptas.',
//   leaderName: 'Josue.Crooks',
//   leaderYear: '2nd year',
//   leaderWhatsapp: '369-359-1569',
//   leaderEmail: 'your.email+fakedata32244@gmail.com',
//   leaderNIC: 'Facere hic eius laboriosam sint cumque rerum ad cum.',
//   member1Name: 'Caitlyn45',
//   member1Year: '4th year',
//   member1Whatsapp: '685-528-3764',
//   member1Email: 'your.email+fakedata16577@gmail.com',
//   member1NIC: '540',
//   member2Name: 'Sally4',
//   member2Year: '2nd year',
//   member2Whatsapp: '007-837-0355',
//   member2Email: 'your.email+fakedata26192@gmail.com',
//   member2NIC: '13',
//   member3Name: 'Lula.Bradtke',
//   member3Year: '3rd year',
//   member3Whatsapp: '971-866-6326',
//   member3Email: 'your.email+fakedata19068@gmail.com',
//   member3NIC: '522'
// }


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
    res.send(err)
    console.log(err)
  }


  // try {
  //   const newSession = new Session({
  //     email: req.body.email,
  //     name: req.body.name,
  //     number: req.body.number,
  //     university: req.body.university,
  //     year: req.body.year,
  //     platform: req.body.platform,
  //     design: req.body.design,
  //   });
  //   await newSession.save();

  //   res.status(200).json({
  //     success: true,
  //     message: "Registered successfully",
  //     data: newSession,
  //   });
    
  // } catch (err) {
  //   res.send(err)
  //   console.log(err)
  // }
};