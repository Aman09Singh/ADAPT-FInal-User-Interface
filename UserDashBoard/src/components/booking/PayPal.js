import React, {useRef, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import Modal from './Modal'

function PayPal() {

    let history = useHistory()
    let fare = localStorage.getItem("uFare")
    const paypal = useRef()
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, action, err) => {
                return action.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Payment for Railway Ticket",
                            amount: {
                                currency_code: "USD",
                                value : fare
                            }

                        }
                    ]
                })
            },
            onApprove: async (data, action) =>{

                const order = await action.order.capture()
                console.log(order);
                alert("Purchase Confirmed! Moving to Home")
                history.push("/home")
            },
            onError: (err) => {
                console.log(err)
                alert("Some Error Occured, Try Again")
                history.push("/checkout")

            }
        }).render(paypal.current)
    }, [])

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default PayPal
