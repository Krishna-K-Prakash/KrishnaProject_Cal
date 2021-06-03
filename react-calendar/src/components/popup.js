import React from 'react';
import '../popup.css';

function Popup(props) {
    return (props.trigger) ? 
     (  
        <div className="popupForm">
            <div className="header">
                <lable className="event">+ ADD EVENT</lable>
            </div>
            <div>
                <input type = "text" placeholder="Add Event" id="myInput" />
                <br />
                <button className="popup-cancel" onClick = {() => props.setTrigger(false)}>Cancel</button>
                <button className="popup-confirm">Add</button>
                { props.children }
            </div>
        </div> 
     ) : "";
}

export default Popup;