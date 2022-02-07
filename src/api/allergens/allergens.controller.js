const Allergen = require('./allergens.model')
const { setError } = require('../../utils/errors/error')
const { deleteFile } = require('../../utils/middleware/deleteFile')


const postNewAllergen = async (req, res, next) => {
    try {
        const newAllergen = new Allergen(req.body)
        const allergenDB = await newAllergen.save()
        return res.status(201).json(allergenDB)
    } catch (error) {
        return next(setError(500, 'Allergen not saved'))
    }
}

const getAllergens = async (req, res, next) => {
    try {
        const allergenDB = await Allergen.find()
        if (!allergenDB) {
            return next(setError(404, 'Allergen not found'))
        }
        return res.status(200).json(allergenDB)
    } catch (error) {
        return next(setError(500, 'Allergen server error'))
    }
}

const putAllergen = async (req, res, next) => {
    try {
        const { id } = req.params
        const putAllergen = new Allergen(req.body)
        putAllergen._id = id
        const allergenDB = await Allergen.findByIdAndUpdate(id, putAllergen)
        if (!allergenDB) {
            return next(setError(404, 'Allergen not found'))
        }
        if (allergenDB.img) deleteFile(allergenDB.img)
        return res.status(200).json({ new: putAllergen, old: allergenDB })
    } catch (error) {
        return next(setError(500, 'Allergen put server error'))
    }
}

const deleteAllergen = async (req, res, next) => {
    try {
        const { id } = req.params
        const allergenDB = await Allergen.findByIdAndDelete(id)
        if (!allergenDB) {
            return next(setError(404, 'Allergen not found'))
        }
        if (allergenDB.img) deleteFile(allergenDB.img)
        return res.status(200).json(allergenDB)
    } catch (error) {
        return next(setError(500, 'Allergen removed server error'))
    }
}

module.exports = {
    postNewAllergen,
    getAllergens,
    putAllergen,
    deleteAllergen
}
