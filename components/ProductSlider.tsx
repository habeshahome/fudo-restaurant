import ProductCard from './ProductCard'

const ProductSlider = (props) => {
    const {products} = props

    //Configuring product items
    const ProductConfig = 
        products.map((product, index) => {
            return (
                <ProductCard 
                    key={index}
                    product={product}
                />
            )
        })

    return (
        <div className="carousel rounded-box pb-6">
            { ProductConfig }
        </div>
    )
}
export default ProductSlider