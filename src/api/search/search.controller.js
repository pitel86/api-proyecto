const Search = require('./search.model')
const { setError } = require('../../utils/errors/error')
const { deleteFile } = require('../../utils/middleware/deleteFile')


const postNewSearch = async (req, res, next) => {
    try {
        console.log(req.body)
        const newSearch = new Search(req.body)
        const searchDB = await newSearch.save()
        return res.status(201).json(searchDB)
    } catch (error) {
        return next(setError(500, 'Search not saved'))
    }
}

const getSearch = async (req, res, next) => {
    console.log(req.params)
    try {
        const { id } = req.params
        const searchDB = await Search.findById(id).populate('product')
        if (!searchDB) {
            return res.status(200).json(setError(404, 'Search not found'))
        }
        return res.status(200).json(searchDB)
    } catch (error) {
        return res.status(200).json(setError(500, 'Search server error'))
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

const putSearch = async (req, res, next) => {
    try {
        const { id } = req.params
        const putSearch = new Search(req.body)
        putSearch._id = id
        const searchDB = await Search.findByIdAndUpdate(id, putSearch)
        if (!searchDB) {
            return next(setError(404, 'Search not found'))
        }
        return res.status(200).json({ new: putSearch, old: searchDB })
    } catch (error) {
        return next(setError(500, 'Search put server error'))
    }
}

module.exports = {
    postNewSearch,
    getSearch,
    deleteSearch,
    putSearch
}
