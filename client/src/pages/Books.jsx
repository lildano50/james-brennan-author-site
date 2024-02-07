import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Books = () => {

  
    return (
        <div>
            <div>
                <h2>Dryftwood: Dust on the Trail (The Tall Tales of Jeremiah Blade)</h2>
                <img/>
                <Link to="/dust-on-the-trail"><h3>Read More</h3></Link>
            </div>
            <div>
                <h2>Dryftwood: Outlaws on the Bayou (The Tall Tales of Jeremiah Blade Book 2)</h2>
                <img/>
                <Link to="/outlaws-on-the-bayou"><h3>Read More</h3></Link>
            </div>
            <div>
                <h2>Dryftwood: Ruins on the Savannah (The Tall Tales of Jeremiah Blade Book 3)</h2>
                <img/>
                <Link to="/ruins-on-the-savannah"><h3>Read More</h3></Link>
            </div>
            <div>
                <h2>Dryftwood: Midnight in the Delta</h2>
                <img/>
                <Link to="/midnight-in-the-delta"><h3>Read More</h3></Link>
            </div>
        </div>
    )
};

export default Books;


