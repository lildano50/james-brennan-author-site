import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import dryftwood from "../../assets/images/dryftwood.jpg"

const Dust = () => {


return (
    <div>
        <div>
            <h2>Dryftwood: Dust on the Trail (The Tall Tales of Jeremiah Blade)</h2>
            <img src={dryftwood} width={200}/>
            <p>In the fantasy western world of Westhold, First-year Alathanian Marshal Jeremiah Blade sets out across the 
                badlands of the Shattered Hills to the dusty frontier town of Dryftwood. Marshal Blade is coming to this 
                lonely outpost of civilization to round up arcane criminals flouting Alathane's magical Duskstone regulations. 
                The marshal has his work cut out for him—Dryftwood is a rough place filled with dangerous outlaws, 
                ornery mayors, and raging dust storms. Jeremiah will soon realize that it is going to take a lot more than words 
                to bring to heel a land that has no intention of being tamed.
            </p>
            <a href='https://www.amazon.com/Dryftwood-Trail-Tales-Jeremiah-Blade/dp/B087RGBVR2/ref=sr_1_1?crid=3VFKIKSXTRWKD&keywords=james+brennan+dryftwood&qid=1707271513&sprefix=james+brennan+%2Caps%2C216&sr=8-1#customerReviews'>Buy the Book</a>
        </div>
    </div>
)
};

export default Dust;