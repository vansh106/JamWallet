const express =  require("express");
const path = require("path");
const app = express();
<<<<<<< HEAD
=======

app.use(express.static('public'));

>>>>>>> a54d33b... frontend progress
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})

<<<<<<< HEAD
const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`port is open on ${portNumber}`);

=======
const server = app.listen(5000);
>>>>>>> a54d33b... frontend progress
