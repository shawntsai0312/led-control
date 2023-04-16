import express from "express";
import cors from "cors";
import change from "./routes/change.js";

const app = express();

// init middleware
app.use(cors());

//define routes
app.use('/api/change', change);

//define server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is on PORT ${port}.`)
})