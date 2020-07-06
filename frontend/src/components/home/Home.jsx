import React from 'react'

import Main from '../main/Main';
import './Home.css'

const Home = (props) => {
    return (
        <Main icon = "home" title = "Start" subtitle = "Second Project">
            <div className = "display-4">Welcome!</div>
            <hr/>
            <p className = "mb-0">System to ilustrate the construiction of a signin react project developed</p>
        </Main>
    );
}

export default Home;