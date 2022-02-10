const Product = require('./product.model')
const { setError } = require('../../utils/errors/error')
const { deleteFile } = require('../../utils/middleware/deleteFile')


const postNewProduct = async (req, res, next) => {
    try {
        console.log(req.body)
        const newProduct = new Product(req.body)
        if (req.file) {
            newProduct.photo = req.file.path
        }
        const productDB = await newProduct.save()
        return res.status(201).json(productDB)
    } catch (error) {
        return next(setError(500, 'Product not saved'))
    }
}

const getAllProducts = async (req, res, next) => {
    try {
        const productsDB = await Product.find()
        res.status(200).json(productsDB)
    } catch (error) {
        return next(setError(500, 'Product failed server'))
    }
}

const getProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const productDB = await Product.findById(id)
        if (!productDB) {
            return next(setError(404, 'Product not found'))
        }
        return res.status(200).json(productDB)
    } catch (error) {
        return next(setError(500, 'Product server error'))
    }
}

const getProductByCode = async (req, res, next) => {
    try {
        const { code } = req.params
        const productDB = await Product.findOne({code:code})
        if (!productDB) {
            return next(setError(404, 'Product not found'))
        }
        return res.status(200).json(productDB)
    } catch (error) {
        return next(setError(500, 'Product server error'))
    }
}

const getProductByQr = async (req, res, next) => {
    try {
        const { qr } = req.params
        const productDB = await Product.findOne({qr:qr})
        if (!productDB) {
            return next(setError(404, 'Product not found'))
        }
        return res.status(200).json(productDB)
    } catch (error) {
        return next(setError(500, 'Product server error'))
    }
}

const getProductByNfc = async (req, res, next) => {
    try {
        const { nfc } = req.params
        const productDB = await Product.findOne({nfc:nfc})
        if (!productDB) {
            return next(setError(404, 'Product not found'))
        }
        return res.status(200).json(productDB)
    } catch (error) {
        return next(setError(500, 'Product server error'))
    }
}

const putProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const putProduct = new Product(req.body)
        putProduct._id = id
        if (req.file) {
            putProduct.photo = req.file.path
        }
        const productDB = await Product.findByIdAndUpdate(id, putProduct)
        if (!productDB) {
            return next(setError(404, 'Product not found'))
        }
        if (productDB.img) deleteFile(productDB.img)
        return res.status(200).json({ new: putProduct, old: productDB })
    } catch (error) {
        return next(setError(500, 'Product put server error'))
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const productDB = await Product.findByIdAndDelete(id)
        if (!productDB) {
            return next(setError(404, 'Product not found'))
        }
        if (productDB.img) deleteFile(productDB.img)
        return res.status(200).json(productDB)
    } catch (error) {
        return next(setError(500, 'Product removed server error'))
    }
}

module.exports = {
    postNewProduct,
    getAllProducts,
    getProduct,
    putProduct,
    deleteProduct,
    getProductByCode,
    getProductByQr,
    getProductByNfc
}
