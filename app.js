/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

var request = require('request'); // "Request" library
var express = require('express');
var client_id = 'f87a3ef2bbc64e80a6b2d906705de8f6'; // Your client id
var client_secret = 'c76efe700272417aa02dbb2ee12ee1f1'; // Your secret
var app = express();

app.use(express.static(__dirname + '/public'))
app.get('/public', function(req, res){
  res.send('hello world'); //replace with your data here
});




// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
  console.log(token);
    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
    //  console.log(body);
console.log(token);
var http = require("http");

function onRequest(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Request-Method', '*');
	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	response.setHeader('Access-Control-Allow-Headers', '*');
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(token);
  response.end();
}

http.createServer(onRequest).listen(8888);
    });
  }
});

console.log('Listening on 8888');
//app.listen(8888);

//alert(42);
