
interface Iprops{
    msg:string
}
const errorMassage = ({msg}:Iprops) => {
  return msg?<span className='text-red-500 text-lg '>{msg}</span>:null
}

export default errorMassage