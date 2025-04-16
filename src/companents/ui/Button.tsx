
import { ReactNode ,ButtonHTMLAttributes} from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>
{
children: ReactNode;
onclick?: () => void;
className?: string;
width?: "w-full" | " w-fit";
}
const Button = ({children,onclick,className,width,...rest}:IButtonProps) => {
  return (
    <button className={`${className} p-2 rounded-md text-white ${width}`} onClick={onclick} {...rest}>
        {children}
    </button>
  )
}

export default Button