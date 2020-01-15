// TweetJS.com - Display your tweets on your website using Javascript alone
// Copyright 2019 Infinite Loop Development Ltd - InfiniteLoop.ie
// Do not remove this notice.

TweetJs = {
    ListTweetsOnUserTimeline : function(screenName, callback) {
        TweetJs._callApi({
                Action: "ListTweetsOnUserTimeline",
                ScreenName: screenName
            },
        callback);
    },
    Search: function (query, callback) {
        TweetJs._callApi({
            Action: "Search",
            Query: query
        }, callback);
    },
    _callApi: function (request, callback) {
        var xhr = new XMLHttpRequest();
        URL = "https://www.tweetjs.com/API.aspx"; 
        xhr.open("POST", URL);
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                callback(JSON.parse(xhr.response));
            }
        }
        xhr.send(JSON.stringify(request));
    }
};

/*
4zoBw4nJipOol4USB5czEYWqb:fkcWG13SPefuwwKCXZK7wvK7Okk9M4Z9lAFmKuvwKmytQ50Bsh
Basic NHpvQnc0bkppcE9vbDRVU0I1Y3pFWVdxYjpma2NXRzEzU1BlZnV3d0tDWFpLN3d2SzdPa2s5TTRaOWxBRm1LdXZ3S215dFE1MEJzaA==

Bearer AAAAAAAAAAAAAAAAAAAAAHCkwwAAAAAAPQJA2GOMjUvQRHS1Msbm0Iiqr%2B0%3Drj5omaJ3GCmRnkhOAIXUtl8kIMkDdmiNAhglRPNwIyJiFFXsoU

https://api.twitter.com/1.1/search/tweets.json?q=%23pruebasjsparatweets&count=100
*/