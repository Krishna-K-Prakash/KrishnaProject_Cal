import React, {useState, useEffect} from 'react';
import '../popup.css';


function Popup(props) {

    const [getPopups, setGetPopups] = useState([])
    const[popups, setPopups] = useState("")

    useEffect(() => {
        const temp = localStorage.getItem("data")
        const loadedItem = JSON.parse(temp)

        if(loadedItem) {
            setGetPopups(loadedItem)
        }
    }, [] )

    useEffect(() => {
        const temp = JSON.stringify(getPopups)
        localStorage.setItem("data", temp)
    }, [getPopups])

    const handleSubmit = (e) => {
        e.preventDefault()

        const newPopup = {
            id : new Date().getTime(),
            text: popups,
            completed:false,
        }

        setGetPopups([...getPopups].concat(newPopup))
        setPopups("")
    }

    const deleteEvent = (id) => {
        const updatedPopup = [...getPopups].filter((popups) => popups.id !== id)
        setGetPopups(updatedPopup)
    }
 
    return (props.trigger) ? 
     (  
        <div className="popupForm">
            <div className="header">
                <lable className="event">+ ADD EVENT</lable>
            </div>
            
            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder="Add Event" onChange={(e) => setPopups(e.target.value)} value={popups} />
                <button className="popup-cancel" onClick = {() => props.setTrigger(false)}>Cancel</button>
                <button type="submit" className="popup-confirm">Add</button>
            </form>
            <div className="show-data">
            {getPopups.map((popups) => 
                <div className="eventData"> 
                    <p>{popups.text}</p>
                    <button><i className="fas fa-times-circle" onClick = {() => deleteEvent(popups.id)}></i></button>
                </div>)}
            </div>
        </div> 
     ) : "";
}

export default Popup;