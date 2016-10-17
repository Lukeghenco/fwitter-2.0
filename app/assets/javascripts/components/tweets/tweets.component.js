(function() {

    'use strict';

    var tweets = {
        transclude: true,
        controller: TweetComponentController,
        templateUrl: 'components/tweets/tweets.html'
    }

    function TweetComponentController(TweetFactory) {
        var ctrl = this

        activate()

        function activate() {
            getTweets()
        }

        function getTweets() {
            return TweetFactory.getTweets()
                               .then(setTweets)
        }

        function setTweets(data) {
            ctrl.tweets = data
        }
    }

    angular
        .module('fwitter')
        .component('tweets', tweets)

}());
