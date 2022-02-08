const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const allergenSchema = new Schema(
    {
        name: { type: 'string', trim: true, required: true },
    },
    {
        timestamps: true
    }
);

const Allergen = mongoose.model('allergens', allergenSchema)
module.exports = Allergen