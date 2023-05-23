#!/usr/bin/node

function searchRequest (apikey, secretkey, search) {
  const request = require('request');
  const base64 = require('base-64');
  const utf8 = require('utf8');
  const key = base64.encode(utf8.encode(apikey + ':' + secretkey));

  const authHeaders = {
    Authorization: 'Basic ' + key,
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  };
  const authData = {
    grant_type: 'client_credentials'
  };
  request.post({
    url: 'https://api.twitter.com/oauth2/token',
    headers: authHeaders,
    qs: authData
  }, function (error, response, body) {
    if (!error) {
      const token = JSON.parse(body).access_token;
      const searchHeaders = {
        Authorization: 'Bearer ' + token
      };
      const searchData = {
        q: search
      };
      request.get({
        url: 'https://api.twitter.com/1.1/search/tweets.json',
        headers: searchHeaders,
        qs: searchData
      }, function (error, response, body) {
        if (!error) {
          let i = 0;
          for (const tweet of JSON.parse(body).statuses) {
            if (++i <= 5) {
              console.log(`[${tweet.id}] ${tweet.text} by ${tweet.user.name}`);
            }
          }
        }
      });
    }
  });
}

searchRequest(process.argv[2], process.argv[3], process.argv[4]);
