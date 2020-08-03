const fs = require('fs')
const Twitter = require('twitter')
const config = JSON.parse(fs.readFileSync(__dirname + '/../config.json'))
const client = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
});

exports.follow = (screen_name) => {
    client.post('friendships/create', { screen_name }, (error) => {
        if (error) throw error;
        console.log(`@${screen_name} さんをフォローしました。`)
    })
}

exports.retweet = (id) => {
    client.post('statuses/retweet/' + id, (error) => {
        if (error) throw error;
        console.log(`リツイートしました。`)
    })
}

exports.wish = (mes = "頼むからあたってくれ") => {
    console.log(mes)
}
