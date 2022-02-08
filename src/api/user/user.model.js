const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {validationPassword} = require('../../utils/validators/validation');
const {setError} = require('../../utils/errors/error');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {type: 'string', trim: true, required: true},
    email: {type: 'string', trim: true, required: true, unique: true},
    password: {type: 'string', trim: true, required: true},
    phone: {type: 'string', trim: true, required: true},
    photo: {type: 'string'},
    contact: {type: 'string', trim: true},
    emailContact: {type: 'string', trim: true},
    phoneContact: {type: 'string', trim: true},
    polize: {type: 'string', trim: true},
    allergens: [{type: Schema.Types.ObjectId, ref:"allergens"}],
    searchs: [{type: Schema.Types.ObjectId, ref:"searchs"}]
},{
    timestamps: true
})


userSchema.pre("save", function (next) {
    if (!validationPassword(this.password)) {
        return next(setError(400, 'La contraseña no tiene los minimos requeridos'))
    }
    console.log("pass");
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

userSchema.pre("findOneAndUpdate", function (next) {
    if (!validationPassword(this._update.password)) {
        return next(setError(400, 'La contraseña no tiene los minimos requeridos'))
    }
    this._update.password = bcrypt.hashSync(this._update.password, 10);
    next();
});

const User = mongoose.model('users', userSchema);
module.exports = User;