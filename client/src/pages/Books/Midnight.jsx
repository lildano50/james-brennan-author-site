import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import midnight from "../../assets/images/midnight.jpg"

const Midnight = () => {


return (
    <div>
        <div>
            <h2>Dryftwood: Midnight in the Delta</h2>
            <img src={midnight} width={200}/>
            <p>
            One hundred and fifty years before the devastation of the Blight, Westhold was a far different world. 
            The Willowgate Empire rules the mainland, but mercenary groups of every size and disposition war in conflicts 
            large and small. Mirabelle Rabideaux of the Sunflowers is one of the many mercenaries to ply her trade, 
            but when two Island Gnome nobles clash over a patch of land in Mira’s native Delta, she gets dragged into 
            the most dangerous conflict of her life. And it’s not just the physical world she has to contend with either—the 
            war has stirred up the spirits in the Delta, and it falls to Mira to lay them to rest. Little does Mira know that her 
            actions will change Westhold, and her life, forever.
            <p></p>
            Join the mercenary Mirabelle Rabideaux for another visit to the Delta, where the veil between worlds is awfully thin, cher.
            </p>
            <a href='https://www.amazon.com/Dryftwood-Midnight-Delta-James-Brennan-ebook/dp/B0CQQ3PYGK/?_encoding=UTF8&pd_rd_w=KKoKP&content-id=amzn1.sym.cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_p=cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_r=140-7142801-5888829&pd_rd_wg=XPRRO&pd_rd_r=e31fe676-b3a0-4cd1-bc91-470064b02818&ref_=aufs_ap_sc_dsk'>Buy the Book</a>
        </div>
    </div>
)
};

export default Midnight;