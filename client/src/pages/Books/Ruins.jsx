import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import ruins from "../../assets/images/ruins.jpg"

const Ruins = () => {


return (
    <div>
        <div>
            <h2>Dryftwood: Ruins on the Savannah (The Tall Tales of Jeremiah Blade Book 3)</h2>
            <img src={ruins} width={200}/>
            <p>
            Jeremiah Blade had settled into a quiet, retired life on the Gnomish Islands until the day the Grand Duke is 
            killed and a long-forgotten name reappeared. Now, it is up to Jeremiah to unravel the mystery, and he must travel 
            to the most dangerous land in Westhold to do so. Yet, he is not alone. With his two powerful forgemates from the 
            Klinkhammer Armory, he will face peril unlike anything he has ever known. Westhold will now have come to terms 
            with the catastrophic event that led to the fall of the Willowgate Empire and changed the face of their world 
            forever. 
            </p>
            <a href='https://www.amazon.com/Dryftwood-Midnight-Delta-James-Brennan-ebook/dp/B0CQQ3PYGK/?_encoding=UTF8&pd_rd_w=vOHFp&content-id=amzn1.sym.cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_p=cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_r=135-9189427-4461504&pd_rd_wg=RFYug&pd_rd_r=ca7fdd31-b00c-4f6e-9c03-bb92585bd996&ref_=aufs_ap_sc_dsk'>Buy the Book</a>
        </div>
    </div>
)
};

export default Ruins;