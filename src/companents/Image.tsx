
interface IImageProps {
      
      src: string;
      alt: string;
      className?: string;
}

const Image = ({src,alt,className}:IImageProps) => {
  return (
    <img src={src} alt={alt} className={className} />
  )
}

export default Image