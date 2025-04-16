
import { useState } from "react"
import ProductCard from "./companents/ProductCard"
import MyModal from "./companents/ui/Dialog"
import { productList } from "./Data"
import Button from "./companents/ui/Button"

interface Iprops 
{

}

const App = ({}:Iprops) => {
   let [isOpen, setIsOpen] = useState(false)
  
    function open() {
      setIsOpen(true)
    }
  
    function close() {
      setIsOpen(false)
    }
  const productDitails=productList.map(product=><ProductCard key={product.id}product={product}/>)
  return (
    <main className="container mx-auto">
      <Button className="bg-blue-400 w-full  hover:bg-blue-300" onclick={open} >Create</Button>
        <MyModal     isOpen={isOpen} closeModal={close} tittle="Add New Product" >
          <div className="flex flex-col items-center justify-center space-y-4">

          <Button className="bg-blue-400 w-full hover:bg-blue-300 text-2xl " onclick={close} >Submit</Button>
          <Button className="bg-red-400 w-full hover:bg-red-300 text-2xl" onclick={close} >Cancel</Button>
          </div>
        </MyModal>
        

    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      
      {productDitails}
    </div>
      </main>
  )
}

export default App