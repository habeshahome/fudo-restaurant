import {NextPage} from 'next'
import {useState, useEffect} from 'react'

const Checkout: NextPage<Props> = (props) => {

    useEffect(() => {
        console.log(localStorage.getItem('cart'))
    }, [])

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="py-4 font-bold">
                    <h1> Fudo Checkout </h1>
                </div>
                
                <div className="py-4"> 
                    Cart Items Goes Here
                </div> 

            </div> 
        </>
    )
}

export default Checkout;