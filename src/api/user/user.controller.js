const User = require('./user.model');
const bcrypt = require('bcrypt');
const { setError } = require('../../utils/errors/error')
const { generateSign, verifyJwt } = require('../../utils/jwt/jwtUtils')

const postNewUser = async (req, res, next) => {
    console.log(req.body)
    console.log(req.file)
    try {
        const newUser = new User(req.body);
        const userDuplicate = await User.findOne({email: newUser.email});
        if(userDuplicate){
            return res.status(200).json(setError(404, 'Email existente'));
        }
        if (req.file) {
            newUser.photo = req.file.path
        }
        const userDB = await newUser.save();
        const token = generateSign(userDB._id, userDB.email);
        return res.status(200).json({user:userDB,token:token});
    } catch (error) {
        return next(error)
    }
}

const loginUser = async (req, res, next) => {
    //console.log(req.body);
    try {
        const userDB = await User.findOne({email: req.body.email});
        if(!userDB){
            return res.status(200).json(setError(404, 'User not found'));
        }
        if (bcrypt.compareSync(req.body.password, userDB.password)) {
            const token = generateSign(userDB._id, userDB.email);
            return res.status(200).json({user:userDB,token:token});
        }else{
            return res.status(200).json(setError(404, 'Incorrect Password'));
        }
    } catch (error) {
        return next(error);
    }
}

const logOut = async (req, res, next) => {
    try {
        const token = null;
        return res.status(200).json(token)
    } catch (error) {
        return next(error)        
    }
}

const getUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userDB = await User.findById(id)
        if (!userDB) {
            return next(setError(404, "User not found"));
        }
        return res.status(200).json(userDB)
    } catch (error) {
        return next(setError(404,'User server fail'));
    }
}


const putUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const putUser = new User(req.body)
        putUser._id = id
        if (req.file) {
            putUser.photo = req.file.path
        }
        
        const userDB = await User.findOneAndUpdate(id,putUser)
        
        if (!userDB) {
            return next(setError(404, 'User not found'))
        }
        if (userDB.photo) deleteFile(userDB.photo)
        return res.status(200).json({ new: putUser, old: userDB })
    } catch (error) {
        return next(setError(500, 'User Put server error'))
    }
}


module.exports = {
    postNewUser, loginUser, logOut, getUser, putUser
}