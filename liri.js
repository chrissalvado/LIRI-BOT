
require("dotenv").config();
var keys = require("./keys.js");
var spotify = require("node-spotify-api");
var axios = require("axios");

var movieName = process.argv[2];

var QueryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


axios.get(QueryUrl).then(

    function(response) {
        console.log(response.data);

        


    })    

    