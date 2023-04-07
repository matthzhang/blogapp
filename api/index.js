//npm init -y - creates package.json file, need to make index.js file seperately
//yarn add express mysql nodemon - packages needed
import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get('/test', (req, res) => {
    res.json("test");
});

app.listen(8800, ()=>{
    console.log("connected");
});