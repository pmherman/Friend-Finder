var friendDataArray = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req,res) {
        res.json(friendDataArray);
    });

    app.post("/api/friends", function(req, res) {
        var userName = surveryResults.name
        
        friendDataArray.push(req.body);

        console.log(userName);
    });
}