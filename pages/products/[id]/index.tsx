import {useRouter} from 'next/router'

const Products = () => {
    const router = useRouter()
    const {id} = router.query

    return (
        <div className="title"> 
            <h2>Product ID:{id}</h2> 
        </div>
    )
}
export default Products