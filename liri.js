require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

var choice = process.argv[2];
var userInput = process.argv[3];

function findConcert(userinput) {
  var QueryUrl =
    "https://rest.bandsintown.com/artists/" +
    userInput +
    "/events?app_id=codingbootcamp";
  axios
    .get(QueryUrl)
    .then(function(response) {
      for (var i = 0; i < response.data.length; i++) {
        console.log("\nName of the venue: " + response.data[i].venue.name);
        console.log(
          "Venue location: " +
            response.data[i].venue.city +
            ", " +
            response.data[i].venue.country
        );
        console.log("Date of the event: " + response.data[i].datetime);
        console.log("************************");
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

function spotifySong(userInput) {
  if (userInput === undefined) {
    userInput = "the sign";
  }
  spotify.search({ type: "track", query: userInput }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    var songs = data.tracks.items
    for (var i = 0; i < data.tracks.items.length; i++) {
      console.log("\nArtist's name: " + songs[i].artists[0].name);
      console.log("Song name: " + songs[i].name);
      console.log("Preview URL : " + songs[i].preview_url);
      console.log("Album Name : " + songs[i].album.name);
      console.log("*************************");
    }
  });
}
function findMovie(userInput) {
  var queryUrl =
    "https://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
  axios
    .get(queryUrl)
    .then(function(response) {
      console.log("\nTitle of the movie: " + response.data.Title);
      console.log("Release date: " + response.data.Released);
      console.log("IMDB rated this movie: " + response.data.imdbRating);
      console.log(
        "Rotten Tomatoes rated the movie: " + response.data.Ratings[1].Value
      );
      console.log("This movie was produced in : " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot of the movie: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log("*********************************");
    })
    .catch(function(error) {
      console.log(error);
    });
}
function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    var dataArr = data.split(",");
    console.log(dataArr);
    chooseLIRI(dataArr[0], dataArr[1]);
  });
}
function chooseLIRI(choice, userInput) {
  switch (choice) {
    case "concert-this":
      findConcert(userInput);
      break;
    case "spotify-this-song":
      spotifySong(userInput);
      break;
    case "movie-this":
      findMovie(userInput);
      break;
    default:
      console.log("Error - try again.");
  }
}
chooseLIRI(choice, userInput);
