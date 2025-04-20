
const AddproductValidatin =(product:{title:string,description:string,imageURL:string,price:string})=> {
const errors:{title:string,description:string,imageURL:string,price:string}={
    title:"",
    description:"",
    imageURL:"",
    price:""
  }
  
  const {title,description,imageURL,price}=product
  const regex = /https?:\/\/[^\s"]+\.(png|jpe?g|gif|svg|webp)(\?[^\s"]*)?/gi;


  
  if(!title.trim()||title.length<3||title.length>20){
    errors.title="title must be at least 3 characters and at most 20 characters"
  }
  if(!description.trim()||description.length<10||description.length>200){
    errors.description="description must be at least 10 characters and at most 200 characters"
  }
  if(!imageURL.trim() || !regex.test(imageURL.trim())){
    errors.imageURL="invalid image URL"
  }
  if(!price.trim()||isNaN(Number(price))){
    errors.price="price must be a number" 
  }
  return errors
}
export default AddproductValidatin