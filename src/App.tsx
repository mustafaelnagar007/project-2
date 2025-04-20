import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./companents/ProductCard";
import MyModal from "./companents/ui/Dialog";
import { colors, formInputsList, productList } from "./Data";
import Button from "./companents/ui/Button";
import Input from "./companents/ui/Input";
import { IProduct } from "./interfaces";
import AddproductValidatin from "./validatian/AddProductValidatian";
import ErrorMassage from "./companents/errorMassage";
import Circal from "./companents/ui/Circal";
import { v4 as uuid } from "uuid";
import Select from "./companents/ui/Select";
import { categories } from "./Data";

interface Iprops {}

const App = ({}: Iprops) => {
  const initalData = {
    id: "",
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  const [product, setProduct] = useState<IProduct>(initalData);
  const [edit, setEdit] = useState<IProduct>(initalData);
  const [editproduct, setEditproduct] = useState(false);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [selected, setSelected] = useState(categories[0]);

  const [temp, settemp] = useState<string[]>([]);
  const [error, seterror] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  let [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  function openEdit() {
    setEditproduct(true);
  }

  function closeEdit() {
    setEditproduct(false);
  }
  const formHunder = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    seterror({
      ...error,
      [name]: "",
    });
  };
  
  const formHundler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, description, imageURL, price } = product;
    const errors = AddproductValidatin({
      title,
      description,
      imageURL,
      price,
    });
    console.log(errors);
    const HasError =
      Object.values(errors).some((value) => value == "") &&
      Object.values(errors).every((value) => value == "");
    if (!HasError) {
      seterror(errors);

      return;
    }

    setProducts((prev) => [
      ...prev,
      { ...product, id: uuid(), colors: temp, category: selected },
    ]);
    setProduct(initalData);
    settemp([]);

    close();
  };
  const cancelPProduct = () => {
    setProduct(initalData);
    close();
  };

  const productDitails = products.map((product) => (
    <ProductCard key={product.id} product={product} setEdit={setEdit}  openEdit={openEdit} />
  ));
  const formDetails = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col space-y-2 w-full">
      <label htmlFor={input.id} className="text-2xl ">
        {input.label}
      </label>
      <Input
        id={input.id}
        name={input.name}
        placeholder={input.blacholder}
        type="text"
        value={product[input.name]}
        onChange={formHunder}
        className="p-2 outline-none border-none  rounded-md bg-[#f4f4f4] w-full"
      />
      <ErrorMassage msg={error[input.name]} />
    </div>
  ));
  const colorList = colors.map((color) => {
    return (
      <Circal
        key={color}
        Color={color}
        onClick={() => {
          if (temp.includes(color)) {
            settemp((prev) => prev.filter((c) => c !== color));
            return;
          }
          settemp((prev) => [...prev, color]);
        }}
      />
    );
  });

  return (
    <main className="container mx-auto">
      <Button className="bg-blue-400 w-full  hover:bg-blue-300" onclick={open}>
        Create
      </Button>
      <MyModal isOpen={isOpen} closeModal={close} tittle="Add New Product">
        <form
          className="flex flex-col items-center justify-center space-y-4"
          onSubmit={formHundler}
        >
          {formDetails}
          <div className="flex gap-2 space-y-2 w-full flex-wrap">
            <label htmlFor="colors" className="text-2xl">
              Colors
            </label>

            {colorList}
            <div className="flex gap-2 space-y-2 flex-wrap justify-center items-center">
              {temp.map((color) => (
                <span
                  className="rounded-lg text-white p-4 "
                  key={color}
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
          <Select selected={selected} setSelected={setSelected} />
          <Button className="bg-blue-400 w-full hover:bg-blue-300 text-2xl ">
            Submit
          </Button>
          <Button
            className="bg-red-400 w-full hover:bg-red-300 text-2xl"
            onclick={cancelPProduct}
          >
            Cancel
          </Button>
        </form>
      </MyModal>
      <MyModal isOpen={editproduct} closeModal={closeEdit} tittle="Edit Product">
        <form
          className="flex flex-col items-center justify-center space-y-4"
          onSubmit={formHundler}
        >
          {formDetails}
          <div className="flex gap-2 space-y-2 w-full flex-wrap">
            <label htmlFor="colors" className="text-2xl">
              Colors
            </label>

            {colorList}
            <div className="flex gap-2 space-y-2 flex-wrap justify-center items-center">
              {temp.map((color) => (
                <span
                  className="rounded-lg text-white p-4 "
                  key={color}
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
          <Select selected={selected} setSelected={setSelected} />
          <Button className="bg-blue-400 w-full hover:bg-blue-300 text-2xl ">
            Submit
          </Button>
          <Button
            className="bg-red-400 w-full hover:bg-red-300 text-2xl"
            onclick={closeEdit}
          >
            Cancel
          </Button>
        </form>
      </MyModal>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {productDitails}
      </div>
    </main>
  );
};

export default App;
