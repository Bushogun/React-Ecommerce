import { useContext } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext }  from '../../Context'

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count+1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        console.log('CART ', context.cartProducts)
    }

    return(
        <div
        className='bg-slate-50 cursor-pointer w-56 h-90 shadow-2xl rounded-lg'
        onClick={()=> showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5'>{data.data.category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.image} alt={data.data.title}/>
                <div className='absolute top-0 text-sm right-0 flex justify-center items-center bg-yellow-300 w-6 h-6 rounded-full m-2' 
                     onClick={(event) => addProductsToCart(event, data.data)}>
                   <PlusIcon className='h-5 w-5 text-black'/>
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light p-1 m-2' style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{data.data.title}</span>
                <span className='text-xl font-medium m-2'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card