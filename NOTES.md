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



<!-- ADMINS? -->
