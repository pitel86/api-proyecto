const ProductRoutes = require('express').Router()
const { isAuth } = require('../../utils/middleware/auth')
const upload = require('../../utils/middleware/file')
const { postNewProduct, getAllProducts, getProduct, putProduct, deleteProduct } = require('./product.controller')


ProductRoutes.get('/', getAllProducts)
ProductRoutes.get('/:id', getProduct)
ProductRoutes.post('/', [isAuth], upload.single('photo'), postNewProduct)
ProductRoutes.put('/:id', [isAuth], upload.single('photo'), putProduct)
ProductRoutes.delete('/:id', [isAuth], upload.single('photoaa'), deleteProduct)

module.exports = ProductRoutes