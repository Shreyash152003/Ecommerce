import { useContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { createContext } from "react";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
    const currency = "₹";
    const delivery_fee = 10;
    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(false)
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();


    const addTocart = async (itemId,size)=>{
        if(!size){
            toast.error('Select Product Size')
            return
        }
            toast.info('your product is being added to cart')
       
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1
            }
        }
        else
        {
            cartData[itemId] = {}
            cartData [itemId][size] = 1
        }
        setCartItems(cartData)
    }

    const getCartCount = ()=>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                     if(cartItems[items][item]>0){
                        totalCount += cartItems[items][item]
                     }
                } catch (error) {
                    
                }
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemId,size,quantity)=>{
            let cartData = structuredClone(cartItems)
            cartData[itemId][size] = quantity
            setCartItems(cartData)
    }

    const getCartAmount =  ()=>{
        let totalAnount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items)
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]){
                        totalAnount += itemInfo.price*87.65 * cartItems[items][item]
                    }
                } catch (error) {
                    
                }

            }
        }
        return totalAnount;
    }


   
    const value ={
        products,currency,delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addTocart,getCartCount,updateQuantity,
        getCartAmount,navigate
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;