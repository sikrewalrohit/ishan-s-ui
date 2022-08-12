import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
import FetchRoute from "./Routes/FetchRoute.js";

app.use("/api/fetch", FetchRoute);


//Routes
app.get("/", (req, res) => {
  res.json({ msg: "We are on home" });
});


//How to start listening to the server
app.listen(4000, () =>
  console.log(`server started on port 4000`)
);