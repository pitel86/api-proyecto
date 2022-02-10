const ProductRoutes = require('express').Router()
const { isAuth } = require('../../utils/middleware/auth')
const upload = require('../../utils/middleware/file')
const { postNewProduct, getAllProducts, getProduct, putProduct, deleteProduct, getProductByCode, getProductByQr, getProductByNfc } = require('./product.controller')


ProductRoutes.get('/', [isAuth], getAllProducts)
ProductRoutes.get('/:id', [isAuth], getProduct)
ProductRoutes.get('/barcode/:code', [isAuth], getProductByCode)
ProductRoutes.get('/qr/:qr', [isAuth], getProductByQr)
ProductRoutes.get('/nfc/:nfc', [isAuth], getProductByNfc)
ProductRoutes.post('/', [isAuth], upload.single('photo'), postNewProduct)
ProductRoutes.put('/:id', [isAuth], upload.single('photo'), putProduct)
ProductRoutes.delete('/:id', [isAuth], upload.single('photoaa'), deleteProduct)

module.exports = ProductRoutes