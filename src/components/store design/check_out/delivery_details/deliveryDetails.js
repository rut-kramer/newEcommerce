import React,{useState} from 'react'
import './deliveryDetails.css'
export default function DeliveryDetails(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [homePhoneNumber, setHomePhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    return (
        <>
            <form className="check-out-form mx-2">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="row check-out-row">
                            <div className="col check-out-left">
                                <label className='check-out-label'>
                                    First Name
                                </label>
                                <div><input type="text" className="check-out-input mx-1 mt-0" onChange={e => setFirstName(e.target.value)}/></div>
                            </div>
                            <div className="col check-out-right">
                                <label className='check-out-label '>
                                    Last Name
                                </label>
                                <div><input type="text" className="check-out-input mx-1" onChange={e => setLastName(e.target.value)}/></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label className='check-out-label'>
                                    Email
                                </label>
                                <input type="email" className="check-out-input mx-1" style={{ width: "100%" }} onChange={e => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="check-out-left col-md-6">
                                <label className='check-out-label '>
                                    Phone Number
                                </label>
                                <div><input type="text" className="check-out-input mx-1" style={{ width: "100%" }} onChange={e => setPhoneNumber(e.target.value)}/></div>
                            </div>
                            <div className="col-md-6 check-out-right">
                                <label className='check-out-label '>
                                    Home Phone Number
                                </label>
                                <div><input type="text" className="check-out-input mx-1" style={{ width: "100%" }} onChange={e => setHomePhoneNumber(e.target.value)}/></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="country" className='check-out-label '>
                                    Country
                                </label>
                                <div>
                                    <select className="check-out-input mx-1" id="country" onChange={e => setCountry(e.currentTarget.value)}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <label for="state" className='check-out-label '>
                                    State
                                </label>
                                <div>
                                    <select className="check-out-input mx-1" id="state" onChange={e => setState(e.currentTarget.value)}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className='check-out-label '>
                                    Address
                                </label>
                                <div><input type="text" className="check-out-input mx-1" onChange={e => setAddress(e.target.value)}/></div>
                            </div>
                            <div className="col">
                                <label className='check-out-label '>
                                    Zipcode
                                </label>
                                <div><input type="text" className="check-out-input mx-1" onChange={e => setZipcode(e.target.value)}/></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </form>
        </>
    )
}