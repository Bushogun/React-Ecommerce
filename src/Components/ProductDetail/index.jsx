import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () =>{
    const context = useContext(ShoppingCartContext)
    // console.log('PRODUCT TO SHOW ', context.productToShow)
return(
    <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black bg-white rounded`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div >
                <XMarkIcon className="h-6 w-6 text-black cursor-pointer"
                onClick={()=>context.closeProductDetail()}/>
            </div>
        </div>
        <figure className='h-80 p-8 rounded'>
            <img className='w-full h-full object-cover rounded-lg' 
            src={context.productToShow.image} 
            alt={context.productToShow.title}/>
        </figure>
        <p className='flex flex-col p-6'>
            <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
            <span className='font-medium text-md'>{context.productToShow.title}</span>
            <span className='font-light text-sm'>{context.productToShow.description}</span>
        </p>
    </aside>
)
}


export default ProductDetail