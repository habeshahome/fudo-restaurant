import ProductSlider from '../components/ProductSlider'

interface Product {
    id: number
    name: string
    price: number
}

interface Products {
    products: Product[]
}


const Products = () => {

    let Drinks: Products

    Drinks = [
        {
            id: 1,
            name: "Bamlak's Shoe",
            price: 900
        },
        {
            id: 1,
            name: "Lina's Shoe",
            price: 900
        },
        {
            id: 1,
            name: "Hani's Shoe",
            price: 900
        },
        {
            id: 1,
            name: "Yayeh's Shoe",
            price: 900
        },
    ]

    return (
            <div className="flex justify-center items-center"> 
                <ProductSlider 
                    products={Drinks} 
                    />
            </div>
    )
}
export default Products