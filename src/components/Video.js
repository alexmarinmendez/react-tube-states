import { useState } from 'react';

const Video = (props) => {
    const [rate, setRate] = useState(0); //hook

    const rateHandler = () => {
        setRate(rate+1)
    }

    return (
        <div className="video-container">
            <div className="video-image">
            <img src={props.thumbnail} alt="Same alt value" />
            </div>
            <div className="video-info">
            <h3>{props.title}</h3>
            <button onClick={rateHandler}>Rate</button> {rate} stars
            <p>Upload date: {props.dateAdded}</p>
            <h4>Channel's Title: {props.channel}</h4>
            <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Video;