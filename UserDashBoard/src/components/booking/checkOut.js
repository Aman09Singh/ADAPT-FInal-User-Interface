import React, {useState} from 'react'
import PayPal from './PayPal'
import './style.css'

function CheckOut(){

    const [checkout, setCheckOut] = useState(false)
    const name = localStorage.getItem("uName")
    const train = localStorage.getItem("s_train")
    const seat = localStorage.getItem("uSeat")
    const age = localStorage.getItem("uAge")
    const date = localStorage.getItem("uDate")
    const email = localStorage.getItem("uEmail")
    const fare = localStorage.getItem("uFare")


    return (
        <div >
            {console.log(email)}
            <div>
            

            <div id="centerpage">
                <h1 id="h1center">CHECKOUT</h1>
                <h2 id="h2name">Name:{name}</h2>
                <h2 id = "h2train">Train: {train}</h2>
                <h2 id = "h2age">Age:{age}</h2>
                <h2 id = "h2email">Email:{email}</h2>
                <h2 id = "h2train"> Fare : $ {fare}</h2>
            </div>
            <div id="checkoutbtn">
            {checkout ? (
                <PayPal />
            ) : (
                <button 
                    onClick={() => {
                        setCheckOut(true);
                    }}
                >
                    Checkout
                </button>
            )}
            </div>
            </div>
            
        </div>
    )
}


export default CheckOut
