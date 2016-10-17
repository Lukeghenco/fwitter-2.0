(function() {

    'use strict';

    var createTweet = {
        transclude: true,
        controller: CreateTweetComponentController,
        templateUrl: 'components/create-tweet/create-tweet.html'
    }

    function CreateTweetComponentController(TweetFactory, $state) {
        var ctrl = this

        ctrl.createTweet = createTweet

        function createTweet() {
            console.log(ctrl.tweetContent)
            return TweetFactory.createTweet(ctrl.tweetContent)
                               .then(function() {
                                   $state.go('home/userProfile')
                               })
        }

    }

    angular
        .module('fwitter')
        .component('createTweet', createTweet)

}());
