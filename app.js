const CalorieMateLIQUID = require(__dirname+'/src/CalorieMateLIQUID')
const follow = CalorieMateLIQUID.follow
const retweet = CalorieMateLIQUID.retweet
const wish = CalorieMateLIQUID.wish

this.account = "CalorieMate_jp"
this.tweet = "1290090004413181952"

const GetGoods = () => {
    follow(this.account)
    retweet(this.tweet)
    wish() // or you can use this function like: wish("当たりますように")
}

GetGoods()