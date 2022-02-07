const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema(
    {
        product: { type: Schema.Types.ObjectId, ref: "product", required: true },
    },
    {
        timestamps: true
    }
);

const Search = mongoose.model('searchs', searchSchema)
module.exports = Search