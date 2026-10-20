import express from "express"; 
import cors from "cors";
import restroomRouter from "./routes/restrooms.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/restrooms", restroomRouter);

app.get("/api/restrooms", (req, res) => {
    res.json([
        {id: 1, name: "Restroom A" },
        {id: 2, name: "Restroom B" },
    ])
}); 

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Server running on port ${PORT}`);
})