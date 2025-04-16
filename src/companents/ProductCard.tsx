import Button from "./ui/Button"
import Image from "./Image"
import { IProduct } from "../interfaces"
import { txtSlicer } from "../utils"

interface IProductCardProps 
{
product:IProduct
}
const ProductCard = ({product}:IProductCardProps) => {
  const { title, price, description, imageURL,category} = product
  return (
    <div className='mx-auto md:mx-0 max-w-sm md:max-w-lg flex flex-col bg-white border rounded-md'>
     <div className='flex flex-col items-center '>
      <Image src={imageURL} alt={title} />
      <h5 className="text-3xl">{title}</h5>
      <p>{txtSlicer(description)}</p>
     </div>
     <div className='flex  items-center space-x-2'>
      <span className={`w-5 h-5 rounded-full bg-red-600 cursor-pointer`}/>
      <span className='w-5 h-5 rounded-full bg-yellow-600 cursor-pointer'/>
      <span className='w-5 h-5 rounded-full bg-cyan-600 cursor-pointer'/>
     </div>
     <div className='flex items-center justify-between p-2'>
      <span className='text-3xl'>${price}</span>
      <Image src={category.imageURL}
       alt={category.name}
       className='rounded-full w-20 h-20 object-center' />
     </div>
     <div className='flex items-center justify-between space-x-2'>
      <Button className='bg-blue-600 text-white p-2 rounded-md ' onclick={() => { } } width="w-full" >Edit</Button>
      <Button className='bg-red-600 text-white p-2 rounded-md '  onclick={()=>{}} width="w-full">Delete</Button>
     </div>
    </div>
  )
}

export default ProductCard