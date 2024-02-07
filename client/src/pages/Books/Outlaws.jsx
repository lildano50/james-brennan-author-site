import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import outlaws from "../../assets/images/outlaws.jpg"

const Outlaws = () => {


return (
    <div>
        <div>
            <h2>Dryftwood: Outlaws on the Bayou (The Tall Tales of Jeremiah Blade Book 2)</h2>
            <img src={outlaws} width={200}/>
            <p>
            Down in the Swamp Elf Delta, on the bayous and backwaters, the spirits are restless. An infamous outlaw stalks the 
            swamps for the Hoodoux Queen, a legendary witch of unimaginable power, to help him find someone he lost a lifetime 
            ago. But he is not alone—bounty hunters of every shape and size haunt his boot-steps, looking to bring Westhold’s 
            most wanted criminal to heel, and it will take everything he possesses to shake loose his deadly pursuers. 
            If the outlaw is to reach his goal, he must find allies new and old, for where he is going is filled with dangers 
            far beyond anything he has ever encountered. There are some dark days ahead on the bayou, cher.
            </p>
            <a href='https://www.amazon.com/Dryftwood-Outlaws-Bayou-Tales-Jeremiah-ebook/dp/B09VQ35MB4/?_encoding=UTF8&pd_rd_w=nAFu2&content-id=amzn1.sym.cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_p=cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_r=135-9189427-4461504&pd_rd_wg=QAzBH&pd_rd_r=c7991de7-f722-44ba-a947-be3243298a17&ref_=aufs_ap_sc_dsk'>Buy the Book</a>
        </div>
    </div>
)
};

export default Outlaws;