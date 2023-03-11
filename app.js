

require('dotenv').config();
const express = require('express');
require('./db');

// const morgan =require("morgan");
const postRouter = require('./routers/post');
const cors = require('cors')


const app = express();
app.use(cors({origin:'https://vermillion-sundae-b06229.netlify.app'}));


app.use(express.json());
//app.use(morgan("dev"));
app.use("/api/post", postRouter);
app.use((err,req,res,next)=> {
    res.status(500).json({error: err.message});
})
const PORT = process.env.PORT || 4848;

app.listen(PORT,() => {
    console.log("port is listening on" + PORT);
});