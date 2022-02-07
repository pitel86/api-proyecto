const AllergenRoutes = require('express').Router()
const { isAuth } = require('../../utils/middleware/auth')
const { postNewAllergen, getAllergens, putAllergen, deleteAllergen } = require('./allergens.controller')


AllergenRoutes.get('/', getAllergens)
AllergenRoutes.post('/', [isAuth], postNewAllergen)
AllergenRoutes.put('/:id', [isAuth], putAllergen)
AllergenRoutes.delete('/:id', [isAuth], deleteAllergen)

module.exports = AllergenRoutes