const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: { type: 'string', trim: true , required: true },
        brand: { type: 'string', trim: true , required: true },
        ingredients: { type: 'String', trim:true },
        allergens: { type: 'String', trim:true },
        photo: { type: 'string', trim: true },
        qr: { type: 'string', trim: true },
        code: { type: 'string', trim: true },
        nfc: { type: 'string', trim: true },
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('product', productSchema)
module.exports = Product