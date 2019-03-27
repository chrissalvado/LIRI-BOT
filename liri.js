
require("dotenv").config();
var keys = require("./keys.js");
var spotify = require("node-spotify-api");
var axios = require("axios");

var QueryUrl = "http://www.omdbapi.com/?t=big&y=&plot=short&apikey=trilogy"

var MovieName = process.argv[2]


axios.get(QueryUrl).then(
    
    function(response) {
        console.log("movie rating" + response.data.rating);

        


    })    

    