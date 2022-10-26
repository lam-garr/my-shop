import React from 'react';
import '../styles/Overlay.css';

interface overlayProp{
    searchbarOpen: boolean;
}

function Overlay2(props:overlayProp){
    return(
        <div className={`overlay ${props.searchbarOpen?'active':''}`}></div>
    )
}

export default Overlay2;