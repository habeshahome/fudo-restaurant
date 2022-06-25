import Image from 'next/image'
import Fries from '../public/img/fries.png'
import { useState, useEffect } from 'react'

interface CartItem {
    id: number,
    title: string,
    price: number,
    qty: number,
    image: string,
}

const Cart = () => {
    const [cart, setCart] = useState([])
    
    let localCart: CartItem[]
    let cartItemsConfig

    if(typeof cart !== 'undefined' && !cart.includes('[]') && cart.length > 0 && cart !== null){
        console.log("Cart Item detected")
        console.log(cart)
        cartItemsConfig =  cart.map((item, index) => {
            return (
                <CartItem 
                    key={item.id}
                    id={item.title}
                    title={item.title}
                    price={item.price}
                    qty={item.qty}
                    image={item.image}
                />
            )
        })
    }else {
        cartItemsConfig = (
            <h2 className="text-center p-12"> Empty Cart </h2>
        )
    }

    useEffect(() => {
        console.log("Cart cart")
        console.log(cart)

        setCart(JSON.parse(localStorage.getItem('cart')) || '[]')
    }, []);
      
    return (
        <div className="fixed z-40 right-96 top-20 w-96">
        <div className="flex flex-col z-50 bg-white w-full rounded-xl shadow-md p-8 overflow-x-scroll"> 
            <div className="flex flex-row justify-between py-4"> 
                <div className="font-bold">
                    <h1> Cart </h1>
                </div>
                <div className="flex justify-center align-middle">
                    <p>  </p>
                </div>
            </div>
            <div>
                { 
                    cartItemsConfig 
                }
            </div>
            <div className="w-full flex flex-row text-white justify-between items-center rounded-full bg-yellow-500 py-4 px-8 mt-8">
                <div> 
                    <h3 className="font-medium"> Checkout </h3>
                </div>
                <div> 
                   <h3> $ total </h3>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Cart

interface Props {
    id: string
    title: string
    price: number
    qty: number
    image: string
}

// setting up template for cart items 
export const CartItem: React.FC<Props> = (props) => {
    const {id, title, price, qty, image} = props;

    return (
        <>
        <div className="flex flex-row justify-between my-4">
                <div className="flex w-32"> 
                    <Image src={image.replace("localhost", "54.169.31.224")} alt="" width="60px" height="60px" />
                </div>

                <div className="flex flex-col w-full pl-2"> 
                    <div className="pb-2">
                        <h3> {title} </h3>
                    </div>
                    
                    <div className="flex flex-row justify-between"> 
                        <div className="flex">
                            <p> - </p>
                        </div>
                        <div className="flex"> 
                            <p> {qty} </p>
                        </div>
                        <div className="flex">
                            <p> + </p>
                        </div>
                        <div className="">
                            <p> $ {price} </p>
                        </div>
                    </div>  
                </div>
            </div>

            <div className="text-red-700 pt-1 pb-4 border-b">
                <p> remove </p>
            </div>
        </>
    )
}