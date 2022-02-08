const Search = require('./search.model')
const { setError } = require('../../utils/errors/error')
const { deleteFile } = require('../../utils/middleware/deleteFile')


const postNewSearch = async (req, res, next) => {
    try {
        const newSearch = new Search(req.body)
        const searchDB = await newSearch.save()
        return res.status(201).json(searchDB)
    } catch (error) {
        return next(setError(500, 'Search not saved'))
    }
}

const getSearch = async (req, res, next) => {
    try {
        const { id } = req.params
        const searchDB = await Search.findById(id).populate('product')
        if (!searchDB) {
            return next(setError(404, 'Search not found'))
        }
        return res.status(200).json(searchDB)
    } catch (error) {
        return next(setError(500, 'Search server error'))
    }
}

const deleteSearch = async (req, res, next) => {
    try {
        const { id } = req.params
        const searchDB = await Search.findByIdAndDelete(id)
        if (!searchDB) {
            return next(setError(404, 'Search not found'))
        }
        if (searchDB.img) deleteFile(searchDB.img)
        return res.status(200).json(searchDB)
    } catch (error) {
        return next(setError(500, 'Search removed server error'))
    }
}

module.exports = {
    postNewSearch,
    getSearch,
    deleteSearch
}
