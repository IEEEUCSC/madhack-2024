import express,{ Express , Request, Response} from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import sessionRegRoute from "./Routes/sessionReg";
dotenv.config();

const URL = process.env.MONGO || "";
const ORIGIN = process.env.ORIGIN || "";

const app: Express = express();
app.use(express.json());
app.use(cors(
    {
        origin: ORIGIN,
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
));

// app.post("/api/register", (req: Request, res: Response) => {
//     let response = {
//         success: true,
//         message: "Registered hee hee"
//     };
//     console.log(response);
//     res.send(response);
// });

// Api is running

app.get("/", (req: Request, res: Response) => {
    res.send("Api is running");
});

app.use("/api/register", sessionRegRoute);

const connect = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Connect to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!")
})

app.listen(4011, () => {
    connect();
    console.log("Server running on port 4011");
});