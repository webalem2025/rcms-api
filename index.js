const express = require('express');
const app = express();
const rummersRouter = require("./routes/rumourRoute")
const mongoose = require("mongoose");

app.use(express.json());
app.use(rummersRouter);

/*app.get("/", (req, res)=>{
    res.send("Get is working")
});
app.get("/user", (req, res)=>{
    res.send("User route is working");
})*/
mongoose
  .connect("mongodb://localhost:27017/myDB")
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err));

app.listen(5000, ()=>{
    console.log("Server is run on port 5000");
})