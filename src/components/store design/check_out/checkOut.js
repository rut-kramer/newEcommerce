import React from 'react'
import DeliveryDetails from './delivery_details/deliveryDetails'
import PaymentDetails from './payment_details/paymentDetails'
import Confirmation from './confirmation/confirmation'
import Stepper from './stepper/stepper';

export default function CheckOut(props) {
    return (
        <>
            <Stepper>
                <DeliveryDetails></DeliveryDetails>
                <PaymentDetails></PaymentDetails>
                <Confirmation></Confirmation>
            </Stepper>
        </>
    )
}