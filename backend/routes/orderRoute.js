import express from 'express'
import { placeOrder,placeOrderRazorpay,placeOrderStripe,updateStatus,userOrders,allOrders } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
const orderRouter = express.Router()


//Admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//payment method
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter
