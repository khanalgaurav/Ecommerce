import React, { createContext } from "react";
import all_dataset from '../assets/all_product';
export const ShopContext= createContext(null);
 

const ShopContextProvider = ({children})=>{
    const constValue={all_dataset};
    return(
        <ShopContext.Provider value={constValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
