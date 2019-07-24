// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // ---------------------------------------------------------------------------
    app.post("/api/friends", function (req, res) {
        var newFriendObject = req.body;
        // the new array to store the difference of scores
        var newTablewithTotalDifference = [];

        //store the total difference
        var totalDifference = 0;

        //store the result for each substraction from the scores
        var result = 0;

        //outer for loop to iterate the entire array of object from table
        for (var i = 0; i < friendsData.length; i++) {

            //reset the total difference for the next object person
            totalDifference = 0;

            //inner for loop to calculate the new Person from the user Input off req.body
            for (var j = 0; j < newFriendObject.score.length; j++) {

                //subtract each object score from first element to the last element of the array
                result = parseFloat(friendsData[i].score[j]) - parseFloat(newFriendObject.score[j])

                //sum up the subtraction and stores in totatdifference
                //and change the values to be positive
                totalDifference += Math.abs(result)
            }

            //inserts into a new array of object for sorting the least total difference
            newTablewithTotalDifference.push({
                friendName: friendsData[i].name,
                totalDifference: totalDifference,
                photo: friendsData[i].photo
            })
        }

        //add a new person into friends
        friendsData.push(newFriendObject);

        //sorts the new array of object against the total difference
        newTablewithTotalDifference.sort(function (a, b) {
            return a.totalDifference - b.totalDifference
        })

        console.log(newTablewithTotalDifference[0])

        res.json(newTablewithTotalDifference[0]);

    });


};
