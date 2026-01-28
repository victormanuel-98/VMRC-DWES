const mongoose = require('../config/db');
const { Schema } = mongoose;

const commentSchema = new Schema({
    movie_id: { type: Schema.Types.ObjectId, ref: 'Movie' },
    text: String,
    date: Date,
    name: String,
});

module.exports = mongoose.model('Comment', commentSchema);
