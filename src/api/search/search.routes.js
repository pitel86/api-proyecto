const SearchRoutes = require('express').Router()
const { isAuth } = require('../../utils/middleware/auth')
const { postNewSearch, getSearch, deleteSearch, putSearch } = require('./search.controller')


SearchRoutes.get('/:id',[isAuth], getSearch)
SearchRoutes.post('/', [isAuth], postNewSearch)
SearchRoutes.delete('/:id', [isAuth], deleteSearch)
SearchRoutes.put('/:id', [isAuth], putSearch)

module.exports = SearchRoutes