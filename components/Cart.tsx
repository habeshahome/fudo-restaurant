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

    if(typeof cart !== 'undefined' && !cart.includes('[]') , cart.length > 0 && cart !== null){
        console.log("Cart Item detected")
        console.log(cart)
        cartItemsConfig =  cart.map((item, index) => {
            return (
                <CartItem 
                    key={item.id}
                    item={item.title}
                    qty={item.qty}
                    price={item.price}
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

    /*
    const getTotalSum = () => {
        return cart.reduce(
          (sum, { cost, quantity }) => sum + cost * quantity,
          0
        );
      };
    
      const clearCart = () => {
        setCart([]);
      };
     
      const setQuantity = (product, amount) => {
        const newCart = [...cart];
        newCart.find(
          (item) => item.name === product.name
        ).quantity = amount;
        setCart(newCart);
      };
    
      const removeFromCart = (productToRemove) => {
        setCart(
          cart.filter((product) => product !== productToRemove)
        );
      };
      */

      
    return (
        <div className="fixed z-40 right-96 top-20 w-96">
        <div className="flex flex-col z-50 bg-white w-full rounded-xl shadow-md p-4"> 
            <div className="flex flex-row justify-between py-4"> 
                <div className="font-bold">
                    <h1> Cart </h1>
                </div>
                <div className="flex justify-center align-middle">
                    <p> X </p>
                </div>
            </div>
            <div>
                { 
                    cartItemsConfig 
                }
            </div>
            <div className="flex w-full">
                <button className="btn btn-lg"> Checkout </button>
            </div>
            
        </div>
        </div>
    )
}

export default Cart

interface Props {
    item: string;
    qty: number;
    price: number;
}

// setting up template for cart items 
export const CartItem: React.FC<Props> = (props) => {
    const {item, qty, price} = props;

    return (
        <>
        <div className="flex flex-row justify-between">
                <div className="flex w-32"> 
                    <Image src={Fries} alt="" width="60px" height="60px" />
                </div>

                <div className="flex flex-col w-full pl-2"> 
                    <div className="pb-2">
                        {item}
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

            <div className="text-red-700 py-2">
                <p> remove </p>
            </div>
        </>
    )
}