(function() {

    'use strict';

    function TweetFactory($http) {

        return {
            getTweets: getTweets,
            // getUserTweets: getUserTweets,
            createTweet: createTweet,
            // updateTweet: updateTweet,
            // heartTweet: heartTweet,
            // reTweet: reTweet,
            // deleteTweet: deleteTweet
        }

        function getTweets() {
            return $http.get('/tweets')
                        .then(handleResponse)
                        .catch(handleError)
        }

        function createTweet(content) {
            var req = {
                method: 'POST',
                url: '/tweets',
                headers: {
                    'Content-Type': undefined
                },
                data: { content }
            }

            return $http(req)
        }

        function handleResponse(response) {
            console.log(response)
            return response.data
        }

        function handleError(error) {
            console.log(error)
        }

    }

    angular
        .module('fwitter')
        .factory('TweetFactory', TweetFactory)

}());
