import React from 'react';
import "./style.css";

function Home() {
    return(
        <>
            <div className='nav'>
                <span className='icon'></span>
                <button>Login</button>
            </div>
            <div className="about">
                <img></img>
                <h2>About Shopwise</h2>
                <p className='box'>Shopwise is your personal shopping assistant that is meant to ease your stress and make sure you stay on budget. With the help of AI shopwise will compare prices on your behalf and return the cheapest price and where you can buy it
                    <br /><br />
                    Simply type in your shopping-list and let shopwise perform it's magic 
                </p>
                <button>Get Started</button>
            </div>
            <div className='anicart'>
                <div className='cart'></div>
                <div className='cart'></div>
                <div className='cart'></div>
            </div>
        </>
    )
}
export default Home;