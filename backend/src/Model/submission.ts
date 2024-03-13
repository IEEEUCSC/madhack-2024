import mongoose from "mongoose";


const submissionSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    teamLeaderEmail: {
        type: String,
        required: true
    },
    githubRepo: {
        type: String,
        required: true
    },
    driveLink: {
        type: String,
        required: true
    },
});


export default mongoose.model('submissionSchema', submissionSchema);