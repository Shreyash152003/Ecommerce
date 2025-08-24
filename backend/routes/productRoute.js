import express from 'express'
import { addProduct,removeProduct,listProducts,singleProductInfo } from '../controllers/productController.js'

const productRouter = express.Router();

productRouter.post('/add',addProduct)
productRouter.get('/list',listProducts)
productRouter.post('/remove',removeProduct)
productRouter.post('/single',singleProductInfo)


export default productRouter