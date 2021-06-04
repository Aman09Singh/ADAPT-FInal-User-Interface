import React from 'react'
import './style.css'

function Modal(props) {

    if(!props.show){return null}

    return (
        <div className = "modal">
            <div className = "modal-content">
                <div className = "modal-header">
                    <h4 className = "modal-title">Update on your Payment</h4>
                </div>
                <div className = "modal-body">
                    Your Payment Has Been Completed. 
                    Redirecting to Home.
                </div>
                <div className = "modal-footer">
                    <button className = "button"> Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
