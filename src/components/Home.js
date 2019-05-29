import React from 'react';
import logo from '../assets/logo.png'


const Home = () => {
    return(
        <section className="home-container">
            <img alt="logo" className="App-logo" src={logo}></img>
            <a id="arrow"><i class="material-icons">arrow_downward</i></a>
        </section>

    )
}

export default Home