require('./models');

const { User, Movie } = require('./models');

// 60062d7e6a58a572437e6fec
Movie.find({name: '流浪地球'}).then(function (res) {
    console.log(res);
})

Movie.find().then(function (res) {
    console.log(res);
})
const m = new Movie({
    name: 'test2',
    a: 1
})
m.save(function (err) {
    console.log('save err', err)
})