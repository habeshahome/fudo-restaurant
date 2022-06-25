import {NextPage} from 'next'
import React, { useEffect, useState } from "react";

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Button from './Button'
import { CartItem } from './Cart';

interface Product {
    id: string
    slug: string
    title: string
    category: string
    image: string
    price: number
    currency: string
    availableQuantity: number
}

interface Props {
    product: Product
    children?: React.ReactNode
}

interface CartItem {
    id: number,
    title: string,
    price: number,
    qty: number,
    image: string,
}

const ProductCard = (props: Props) => {
    let cart: CartItem[]
    
    const {id, title, currency, price, image } = props.product
    const currentItem: CartItem = {
                id: id, 
                title: title, 
                price: price, 
                qty: 1, 
                image: image } 

    const addToCart = () => {
        console.log("%c Inside addToCart function ", 'background: #222; color: #bada55')
        console.log("Current Item = ", currentItem)
        let isNewItem = true // if found just add the quantity only
        
        cart = JSON.parse(localStorage.getItem('cart')) || []
 

        if(typeof(cart) === "undefined" || cart.length === 0){
            console.log("Cart Not Found in Local Storage!")
            cart = [currentItem]
        }
        else{
            console.log("Cart Found in Local Storage!")

            let updatedCart: CartItem[] = cart.map(oldItem => {
                
                console.log("Checking if the Product Already Exist in Cart")
                console.log("Current Item = ")
                console.log(currentItem)
                console.log("Old Item = ")
                console.log(oldItem)

                if(oldItem.id === id && oldItem.title === title){
                    console.log("Product found in Current Cart")
                    console.log("Current Item Inside if()")
                    console.log(oldItem)
                    isNewItem = false

                    return { 
                            id: oldItem.id,  
                            title: oldItem.title,
                            price: oldItem.price,
                            qty: oldItem.qty + 1,
                            image: oldItem.image
                        }
                    } 
                    // return same item
                    console.log("Returning Same Item")
                    console.log(oldItem)
                    
                    return { 
                            id: oldItem.id,  
                            title: oldItem.title,
                            price: oldItem.price,
                            qty: oldItem.qty+1,
                            image: oldItem.image
                    }

            })
            if(isNewItem){
                cart.push(currentItem)
                console.log(updatedCart)
            }else{
                cart = updatedCart
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    return (
        <div className="carousel-item mr-8 cursor-pointer">
            <div className="card w-72 bg-base-100 shadow-md">

                    <figure>
                        <Image
                            src={image.replace("localhost", "54.169.31.224")} 
                            alt="Shoes" 
                            width="320px"
                            height="320px"
                            />
                    </figure>
                    
                    <div className="card-body p-4">

                        <h3 className="card-title font-normal"> {title} </h3>
                        <p> {currency} {price} </p>

                        <div className="card-actions flex flex-row justify-between items-center">
                            <div> 
                                <button 
                                    className="w-full flex justify-start mt-2"
                                    onClick={() => addToCart() }
                                    >Add to cart
                                </button>
                            </div>
                            <div>
                            <Image
                            src="/img/Cart.png" 
                            alt="Shoes" 
                            width="24px"
                            height="24px"
                            />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard