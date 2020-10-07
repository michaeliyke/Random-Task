const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000 ,function(){
    console.log("Server is running")
});

app.get("/", function(req,res){
    res.sendFile(__dirname+'/index.html')
})

app.use(bodyParser.urlencoded({extended: true}));
app.post("/", function(req,res){
    var bookName =  req.body.name;
    var authorName = re.body.author-name;
    var isbn = req.body.isbn;
    res.send('The book has been added')
})