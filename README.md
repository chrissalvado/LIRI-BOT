# LIRI-BOT
LIRI BOT is a siri like search application that asks the user to choose either a band name, song name, or movie name . If the user chooses a song name LIRI then returns information on the artist, album, and a preview url for the title. If the user chooses a band name LIRI returns information on the next concert and the venue for the chosen artist. If the user requests movie name LIRI provides the release date , language, actors , plot summary , as well as IMDB and rotten tomatoes. 

## Requirements
The user will need to go to the spotify developer page and aquire a user key and secret password in order to access the spotify API. https://developer.spotify.com/
The following dependencies were used to run LIRI.js
* axios
* dotenv 
* axios
* fs
  
## How To Request The Information from LIRI

In order to run LIRI there has to be a specificly ordered request on the command line:

* node liri.js 'concert-this' 'user input'
* node liri.js 'spotify-this-song' 'user input'
* node liri.js 'movie-this' 'user input'
* for example the correct format is as such : node liri.js movie-this goldeneye
  
## API's Used For This Project
* Spotify
* Bandsintown
* IMDB
  
## Contributor 
Chris Salvado was the sole contributor on this project , please send any comments to him at Chris salvado999@gmail.com
