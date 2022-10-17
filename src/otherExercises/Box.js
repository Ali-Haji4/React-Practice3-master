import React from 'react';
import boxes from './boxes';

export default function Box(props) {

        const styles = {backgroundColor: props.on ? "black":"white"};

        return ( <div style={styles} className="boxes" onClick={()=>props.toggle(props.id)}></div>);    
}