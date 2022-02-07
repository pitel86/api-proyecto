const SearchRoutes = require('express').Router()
const { isAuth } = require('../../utils/middleware/auth')
const { postNewSearch, getSearch, deleteSearch } = require('./search.controller')


SearchRoutes.get('/:id',[isAuth], getSearch)
SearchRoutes.post('/', [isAuth], postNewSearch)
SearchRoutes.delete('/:id', [isAuth], deleteSearch)

module.exports = SearchRoutes