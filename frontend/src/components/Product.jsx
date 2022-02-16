import { Link } from "react-router-dom"

const Product = () => {

    return (
        <Link to='/products/5490509' class="lg:w-1/4 md:w-1/2 px-4 pb-8 w-full flex flex-col items-center">
            <span class="block relative w-[70%] md:w-full rounded-md overflow-hidden">
                <img alt="ecommerce" class="object-cover p-3 object-center w-full h-full block" src="https://images-na.ssl-images-amazon.com/images/I/61DYLoyNRWL.__AC_SY300_SX300_QL70_FMwebp_.jpg" />
            </span>
            <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p class="mt-1">$18.40</p>
            </div>
        </Link>
    )
}

export default Product