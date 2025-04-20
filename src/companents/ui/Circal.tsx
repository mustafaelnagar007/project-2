import {} from 'react'
interface ICircalProps extends React.HTMLProps<HTMLSpanElement>
{
Color :string

}


const Circal = ({Color,...rest}:ICircalProps) => {
  return (
   <span className={`block w-5 h-5 rounded-full cursor-pointer`} style={{backgroundColor:Color}} {...rest}/>
  )
}

export default Circal