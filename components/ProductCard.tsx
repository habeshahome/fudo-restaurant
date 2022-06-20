import {NextPage} from 'next'
import React, { useEffect, useState } from "react";

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Button from './Button'

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
    products: Product[]
    children?: React.ReactNode
}

interface CartItem {
    id: number,
    title: string,
    price: number,
    qty: number,
    image: string,
}

const ProductCard: NextPage<Props> = ({product} : props) => {
    const {id, title, currency, price, image } = product

    let thisItem: CartItem = {
            id: id, 
            title: title, 
            price: price, 
            qty: 1, 
            image: image } 
    
    //console.log(product)
    let cart:CartItem[]
    
    localStorage.clear()
 
    function add() {

        const lc = localStorage.getItem('cart') || []

        if(!lc){

            cart = JSON.parse(lc)
            console.log(cart)
            cart = cart.map(findItem => {
                if(findItem.id == id){
                   
                    return { 
                            id: findItem.id,  
                            title: findItem.title,
                            price: findItem.price,
                            qty: findItem.qty+1,
                            image: findItem.image
                        }
                }
                // return same item
                return { 
                        id: findItem.id,  
                        title: findItem.title,
                        price: findItem.price,
                        qty: findItem.qty+1,
                        image: findItem.image
                    }
            })
            cart.push()
        }else {
            cart = [thisItem]
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
                                    onClick={() => add() }
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