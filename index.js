const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json())

const users = ['shipon','minnatul','noone'];


app.get('/',(req,res) => {
    res.send("NODE JS is running on browser");
})

app.get('/user/:id',(req,res)=> {
    const id = req.params.id;
    const name = users[id];
    // console.log(req.query.sort);
    // const query = req.query.sort;
    res.send({id,name});
    // res.send(query);
})

// Post request
app.post("/addUser",(req,res) => {
    const user = req.body;
    user.id = 5;
    console.log(req.body);
    res.send(user);
})

app.listen(4002,()=>console.log("Listening to port 4002"));