import React from 'react';
import '../styles/Overlay.css';

interface overlayProp{
    sidebarOpen: boolean;
}

function Overlay(props:overlayProp){
    return(
        <div className={`overlay ${props.sidebarOpen?'active':''}`}></div>
    )
}

export default Overlay;