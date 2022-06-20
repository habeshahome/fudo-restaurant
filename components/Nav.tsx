import type { NextPage } from 'next'
import {useState, useEffect} from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Nav.module.scss'
import Cart from './Cart'
import Button from './Button'

const Nav = () => {

    const [numOfCartItems, setNumOfCartItems] = useState(0)
    const [openCart, setOpenCart] = useState(false)

    useEffect(()=> {
        //console.log(localStorage.getItem('numOfCartItems'))
        setNumOfCartItems(localStorage.getItem('numOfCartItems'))
    }, [])

    return (
        <> 
        <div className=" grid grid-cols-3 py-8 items-center bg-transparent">
            <div className="nav flex flex-row items-center space-x-2">
                <div className=""> 
                    <Image src="/img/logo-with-text.png" alt="Cart" width="100%" height="36" />
                </div>
            </div>
            
            <nav className="nav flex flex-row space-x-8"> 
                <Link href="/"> 
                    <a> Home </a> 
                </Link>
                <Link href="/#form-section"> 
                    <a> Forms </a> 
                </Link>
                <Link href="/#menu-section"> 
                    <a> Menu </a> 
                </Link>
            </nav>
            
            <div className="flex justify-end space-x-8">
                <div>
                    <div className="indicator" onClick={() => setOpenCart(true)}>
                        <span className="indicator-item badge badge-secondary">{ numOfCartItems }</span>
                        <div className="grid w-8 h-8 place-items-center overflow-hidden">
                            <Image src="/img/Cart.png" alt="Cart" width="64" height="64" />
                        </div>
                        <div className="">
                            { openCart ? <Cart /> : '' } 
                        </div>
                    </div>
                </div>
                
                <div>
                    <Button 
                        title="Login"
                        url="/login"
                        />
                </div> 
            </div>
        </div>
        
         </>
    )
}

export default Nav;