//placing order using cod
import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"
import Stripe from 'stripe'

//gateway initialized
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)



const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.json({ success: true, message: "Order Placed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}

//placing order using Stripe method

const placeOrderStripe = async (req, res) => {

}

//placing order using Razorpay method

const placeOrderRazorpay = async (req, res) => {

}


//All orders data for admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

//User Order Data for frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body
        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

//update order status from admin panel
const updateStatus = async (req, res) => {
        try {
            const {orderId, status}  = req.body

            await orderModel.findByIdAndUpdate(orderId, {status})
            res.json({success:true,message:'Status Updated'})
        } catch (error) {
            console.log(error);
            res.json({success:false,message:error.message})
            
        }
}

export { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, userOrders, updateStatus }