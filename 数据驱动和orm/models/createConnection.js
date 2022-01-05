const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Moviedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongoose.connection.on('open', () => {
    console.log('数据库已连接')
})