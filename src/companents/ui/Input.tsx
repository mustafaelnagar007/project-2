import React from 'react'
interface Iprops extends React.InputHTMLAttributes<HTMLInputElement> {

}
const Input = ({...rest}:Iprops) => {
  return (
    <input type="text" {...rest}/>
  )
}

export default Input