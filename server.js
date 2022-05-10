const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3002;

app.use('assets', express.static(path.join(__dirname, "./client/src/assets")));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/api/tickets', (req, res) => {
    fs.readFile("./client/src/assets/data.json", (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
});

app.post("/ticket", (req, res) => {
    fs.readFile("./client/src/assets/data.json", (err, json) => {
        if (err) throw err;
        let obj = JSON.parse(json);

        // create a new issue from the body of post request
        let newIssue = {
            "id":"1",
            "category":"",
            "priority":"",
            "status":""
        }

        console.log("REQ: " + req);

        /*
        newIssue.id = req.body.id;
        newIssue.category = req.body.category;
        newIssue.priority = req.body.priority;
        newIssue.status = req.body.status;
        */

        // add it to the existing file content
        // obj.data.push(newIssue);

        // update the file 
        let newData = JSON.stringify(obj);
        fs.writeFile("./client/src/assets/data.json", newData, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("File written successfully.");
            }
        });
        res.json({"status": "success"});
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})