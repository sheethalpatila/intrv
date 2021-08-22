const express =require ("express");


const app = express();
const port = 9000;


app.get("/" ,(req,res) => {
    res.send("hello welcome to home");
})




app.listen(port , () => {
    console.log("server is loading")
});
