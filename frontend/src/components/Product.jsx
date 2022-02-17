import { Link } from "react-router-dom"

const Product = ({ product }) => {

    return (
        <Link to={`/products/${product._id}`} class="flex flex-col items-center justify-between m-4 ">
            <div className="w-[40%] md:w-full md:aspect-w-9 md:aspect-h-12 rounded-md overflow-hidden">
                <img className="h-full w-full" src={product.imageURL} alt="product" />
            </div>
            <h3 className="text-md xl:text-xl font-semibold overflow-hidden">{product.productName}</h3>

            <h4 className="self-start justify-self-end text-3xl font-bold text-gray-500">${product.priceInCent / 100}</h4>

        </Link>
    )
}

export default Product