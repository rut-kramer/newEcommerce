import React,{useState} from 'react'
import './paymentDetails.css'
export default function PaymentDetails(props) {
    const [payment, setPayment] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    return (
        <>
            <form className="check-out-form mx-2">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="radio-payment mx-2">
                            <input  type="radio" id="creditCardRadio" name="creditCardRadio" onClick={() => setPayment('CreditCard')}/>
                            <label className="ml-2" for="creditCardRadio">Credit Card</label>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label className='check-out-label'>
                                    Name On Card
                                </label>
                                <input type="email" className="check-out-input mx-1" style={{ width: "100%" }} onChange={e => setNameOnCard(e.target.value)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label className='check-out-label'>
                                    Card Number
                                </label>
                                <input type="email" className="check-out-input mx-1" style={{ width: "100%" }} onChange={e => setCardNumber(e.target.value)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <label for="expiryDate" className='check-out-label '>
                                    Expiry Date
                                </label>
                                <div className="row">
                                    <div className="col-6 aa">
                                        <select className="check-out-input ml-1" id="expiryDate">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                    <div className="col-6 aa">
                                        <select className="check-out-input" id="expiryDate">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label for="cvv" className='check-out-label'>
                                    cvv
                                </label>
                                <div>
                                    <input className="check-out-input mx-1" onChange={e => setCvv(e.target.value)}></input>
                                </div>
                            </div>
                        </div>
                        <div className="radio-payment mt-3 mx-2">
                            <input className="credit-card-radio-input"  type="radio" id="creditCardRadio" name="creditCardRadio" onClick={() => setPayment('Paypal')}/>
                            <label className="credit-card-radio-label ml-2" for="creditCardRadio">Paypal</label>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </form>
        </>
    )
}