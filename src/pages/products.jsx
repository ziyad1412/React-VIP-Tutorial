import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
const products = [
  {
    id: 1,
    name: "Shoes",
    price: "$ 200",
    image: "images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    name: "Shoes 2",
    price: "$ 300",
    image: "images/shoes-1.jpg",
    description:
      "Lorem ipsum 2 dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    name: "Shoes 3",
    price: "$ 200",
    image: "images/shoes-1.jpg",
    description:
      "Lorem ipsum 3 dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header images={product.image}></CardProduct.Header>
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
