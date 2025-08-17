import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  console.log(productId);
  const { products,currency,addTocart} = useContext(ShopContext)
  const [productData, setProductData] = useState(false) //adhi false hota
  const [image, setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])

        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])



  return productData ? (
    <div className='border-t-2 pt-10 transiton-opacity ease-in duration-500 opacity-100'>
      {/* Product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/*############PRODUCT iNFO ############## */}
        <div className='flex-1'>
            <h1 className=' font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(127)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price*87.65}</p>
            <p className='mt-5 text-gray-500 w-4/5 '>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
                  <p>Select Size</p>
                  <div className='flex gap-2'>
                  {
                    productData.sizes.map((item,index)=>(
                      <button onClick={()=>setSize(item)} className={` cursor-pointer border py-2 px-4 bg-gray-100 ${item===size ? 'border-orange-500':''}`} key={index}>{item}</button>
                    ))
                  }
                  </div>
            </div>
            <button onClick={()=>(addTocart(productData._id,size))} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>
              ADD TO CART
            </button>
            <hr className='mt-8 sm:w-4/5' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p>100% Original Product.</p>
                    <p>Cash on Delivery Is available On this Product.</p>
                    <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
      </div>
      {/* ################# DESCRIPTION & REVIEW SECTION   ########################## */}
      <div className='mt-20'>
        <div className='flex'> 
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (127)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
               <p>"Shop smarter with us! Our e-commerce platform brings you trendy, affordable, and reliable products all in one place. From the latest collections to everyday essentials, we make online shopping simple, fast, and enjoyable. Your satisfaction is our priority, and we’re here to deliver happiness right to your doorstep."</p>
                <p>"Welcome to our e-commerce store, your one-stop destination for high-quality products at the best prices. We are committed to providing a seamless shopping experience with secure payments, fast delivery, and reliable customer support. Discover a wide range of categories tailored to your needs and enjoy shopping with confidence."</p>
        </div>
      </div>
      {/* ################## DISPLAY RELATED PRODUCTS ####################### */}
       <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>


    </div>
  ) : <div className='opacity-0'>
  </div>
}

export default Product