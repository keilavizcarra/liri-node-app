require("dotenv").config();

var keys = require("./keys");
var request = require("request");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var moment = require("moment");

//spotify 
var spotifyThisSong = function(trackQuery) {

	var spotify = require('spotify');


	if(trackQuery === undefined) {
		trackQuery = "the sign ace of base";
	}


	spotify.search({ type: 'track', query: trackQuery }, function(error, data) {
	    if(error) { 
	        console.log('Error occurred: ' + error);
	    } else { 
				for(var i = 0; i < data.tracks.items[0].artists.length; i++) {
					if(i === 0) {
						console.log("Artist(s):    " + data.tracks.items[0].artists[i].name);
					} else {
						console.log("              " + data.tracks.items[0].artists[i].name);
					}
				}
				console.log("Song:         " + data.tracks.items[0].name);
				console.log("Preview Link: " + data.tracks.items[0].preview_url);
				console.log("Album:        " + data.tracks.items[0].album.name);
	    }
	 
	 		
	});
}

//movie
var movieThis = function(movieQuery) {
	
	var request = require("request");

	
	if(movieQuery === undefined) {
		movieQuery = "mr nobody";
	}

	
	request("http://www.omdbapi.com/?t=" + movieQuery + "&y=&plot=short&r=json", function(error, response, body) {
	  if (!error && response.statusCode === 200) {
	    console.log("* Title of the movie:         " + JSON.parse(body).Title);
	    console.log("* Year the movie came out:    " + JSON.parse(body).Year);
	    console.log("* IMDB Rating of the movie:   " + JSON.parse(body).imdbRating);
	    console.log("* Country produced:           " + JSON.parse(body).Country);
	    console.log("* Language of the movie:      " + JSON.parse(body).Language);
	    console.log("* Plot of the movie:          " + JSON.parse(body).Plot);
	    console.log("* Actors in the movie:        " + JSON.parse(body).Actors);

	    // For loop parses through Ratings object to see if there is a RT rating
	    // 	--> and if there is, it will print it
	    for(var i = 0; i < JSON.parse(body).Ratings.length; i++) {
	    	if(JSON.parse(body).Ratings[i].Source === "Rotten Tomatoes") {
	    		console.log("* Rotten Tomatoes Rating:     " + JSON.parse(body).Ratings[i].Value);
	    		if(JSON.parse(body).Ratings[i].Website !== undefined) {
	    			console.log("* Rotten Tomatoes URL:        " + JSON.parse(body).Ratings[i].Website);
	    		}
	    	}
	    }
	  }
	});
}