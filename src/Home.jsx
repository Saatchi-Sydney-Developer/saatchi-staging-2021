import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>Home</div>
            <Link to="/posts/1">Take me to post 1</Link>
        </div>
    )
}

export default Home;