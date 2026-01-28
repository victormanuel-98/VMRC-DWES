const mongoose = require('./config/db');
const Movie = require('./models/movie');
const Comment = require('./models/comment');

async function main() {

    const movie = await Movie.findOne();
    console.log(movie);

    const comment = await Comment.findOne().populate('movie_id', 'title genres year rated type');
    console.log(comment);

    mongoose.disconnect();
}

main();
