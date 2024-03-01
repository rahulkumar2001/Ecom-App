
import {createContext,useState} from "react";

export const Context=createContext();

const AppContext=({children})=>{
    return (
        <Context>
            
            {children}

            </Context>

    )
}

export default AppContext;