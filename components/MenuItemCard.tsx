import {NextPage} from 'next'
import React, { useEffect, useState } from "react";

import Image from 'next/image'

    interface Props {
        children?: React.ReactNode;
    }

const MenuItemCard: NextPage<Props> = (props) => {
    
    const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);  
    const [items, setItems] = useState([])  
    //const addItems = useContext(AddCartContext);

    //checking if cart from localstorage
    useEffect(() => {
        if(isInitiallyFetched){
            localStorage.setItem("cart", JSON.stringify(items));
            total();
        }
    }, [items]);

    //setting cart to local storage
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify({}))
        let prev_items = JSON.parse(localStorage.getItem('cart')) || [];
        //console.log(prev_items)
        //addItems(prev_items)
        setIsInitiallyFetched(true)
    },[])

    return (
        <div className="max-w-xs flex flex-col bg-white rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="rounded-none bg-green">
            <a href="#">
                <Image src="/img/pizza 1.png" width="360px" height="360px" alt="" />
            </a>
        </div>
        
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl tracking-tight text-gray-900 dark:text-white"> {props.title} </h5>
            </a>
            
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-white">$599</span>
            </div>
            <div className="pt-2 pb-1"> 
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
            </div>
        </div>
    </div>
    )
}

export default MenuItemCard