<!-- USERS -->
User has a email address, username, and a password
has many tweets

<!-- TWEETS -->
Belongs to a user and can only be deleted or edited by his owner
Feature to retweet
A tweet has content

    # of retweets
    <!-- RETWEET TABLE  -->
    belongs_to
    Tweet_id, id, user_id

    # of hearts
    <!-- Hearted_Tweet_table -->
    belongs_to
    Tweet_id, id, user_id



    [
        {
            content: 'My First tweet',
            user: {
                username: 'lukeghenco',
                email: 'luke@flatironschool.com',
                user_id: '1'
            },
            re_tweets: [
                {
                    id: 1,
                    user_id: 1,
                    tweet_id: 1
                },
            ],
            love_tweets: [
                {
                    id: 1,
                    user_id: 1,
                    tweet_id: 1
                },
            ]
        }
    ]


<!-- JAVASCRIPT -->

Use a packaging service to handle front end assets
    - bower ( bower-rails )
    - Angular Templates ( angular-rails-templates )

Use Angular
    - Angular JS ( ng-directives, controller, services, factories and components)
    - Angular UI Router ( routing URL )
    - Angular Devise ( Front End Authentication )

Use Moment.js
Use Bootstrap
