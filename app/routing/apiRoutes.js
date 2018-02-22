var friendDataArray = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req,res) {
        res.json(friendDataArray);
    });

    app.post("/api/friends", function(req, res) {
        var userResponse = req.body;
        var friendName = "";
        var friendPhoto = "";
        var userResQues = userResponse.ques;
        var perfectFriend = 10000;

       

        for (var i=0; i < 10; i++) {
            var totalDifference = 0;
            for (var j=0; j < userResQues.length; j++) {
                totalDifference += Math.abs(parseInt(userResQues[j]) - parseInt(friendDataArray[i].ques[j]));
            }
            if (totalDifference < perfectFriend) {
                perfectFriend = totalDifference;
                friendName = friendDataArray[i].name;
                friendPhoto = friendDataArray[i].photo;
            }
            console.log("Friend Name: " + friendName);
            console.log("Friend Photo:" + friendPhoto);
        }

        // console.log("Total Different is: " + totalDifference);
        // console.log("Quest Length: " + userResQues.length);
        // console.log("Friends Data Array: " + friendDataArray.length);
        
        friendDataArray.push(userResponse);

        res.json({
            status: "OK",
            friendName: friendName,
            friendPhoto: friendPhoto
        })

    });
}