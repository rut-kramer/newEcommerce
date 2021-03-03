import React from 'react';
import { Link } from 'react-router-dom';

import homeImg from '../assets/50344.jpg';


function Home() {

    return (
        <div>
            <img id="home-img" src={homeImg} alt="homeImg" style={{ float: "left" }} />
            <div style={{ float: "left" }}>
                <h1>Wellcome!!</h1>
                <h2>Do you want to create your shop?</h2>
                <Link to='/login'>
                    <button style={{marginBottom:"21px"}}>create virtual shop</button>
                </Link>
            </div>

        </div>
    )
}

export default Home;