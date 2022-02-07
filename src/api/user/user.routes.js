const UserRoutes = require('express').Router();
const { isAuth } = require('../../utils/middleware/auth')
const { postNewUser, loginUser, logOut, getUser, putUser } = require('./user.controller')
const upload = require('../../utils/middleware/file')


UserRoutes.post('/',upload.single('photo'), postNewUser);
UserRoutes.post('/login', loginUser);
UserRoutes.post('/logout',[isAuth], logOut);
UserRoutes.get('/:id', [isAuth], getUser);
UserRoutes.put('/:id',[isAuth],upload.single('photo'), putUser);

module.exports = UserRoutes;