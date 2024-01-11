import mongoose from "mongoose";

// const sessionSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     number:{
//         type: String,
//         required: true
//     },
//     university:{
//         type: String,
//         required: true
//     },
//     year:{
//         type: String,
//         required: true
//     },
//     platform:{
//         type: String,
//         required: true
//     },
//     design:{
//         type: String,
//         required: true
//     },


// });

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

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    other: {
        type: String,
        required: false
    },
    leaderName: {
        type: String,
        required: true
    },
    leaderYear: {
        type: String,
        required: true
    },
    leaderWhatsapp: {
        type: String,
        required: true
    },
    leaderEmail: {
        type: String,
        required: true
    },
    leaderNIC: {
        type: String,
        required: true
    },
    member1Name: {
        type: String,
        required: true
    },
    member1Year: {
        type: String,
        required: true
    },
    member1Whatsapp: {
        type: String,
        required: true
    },
    member1Email: {
        type: String,
        required: true
    },
    member1NIC: {
        type: String,
        required: true
    },
    member2Name: {
        type: String,
        required: true
    },
    member2Year: {
        type: String,
        required: true
    },
    member2Whatsapp: {
        type: String,
        required: true
    },
    member2Email: {
        type: String,
        required: true
    },
    member2NIC: {
        type: String,
        required: true
    },
    member3Name: {
        type: String,
        required: false
    },
    member3Year: {
        type: String,
        required: false
    },
    member3Whatsapp: {
        type: String,
        required: false
    },
    member3Email: {
        type: String,
        required: false
    },
    member3NIC: {
        type: String,
        required: false
    },

});




export default mongoose.model('Team', teamSchema);