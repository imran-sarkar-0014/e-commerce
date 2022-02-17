import { Link } from "react-router-dom"

const Product = ({ product }) => {

    return (
        <Link to={`/products/${product._id}`} class="flex flex-col items-center m-4">
            <div className="w-[40%] md:w-full md:aspect-w-9 md:aspect-h-12">
                <img className="h-full w-full" src={product.imageURL} alt="product" />
            </div>
            <div>
                <h3 className="text-xl font-semibold">{product.productName}</h3>
                <h4 className="text-lg">${product.priceInCent / 100}</h4>
            </div>
        </Link>
    )
}

export default Product