import { Component } from "react";

class Video extends Component {
    render() {
        return (
            <div className="video-container">
                <div className="video-image">
                <img src="https://i.ytimg.com/vi/zQ41hqlV0Kk/mqdefault.jpg" alt="Same alt value" />
                </div>
                <div className="video-info">
                <h3>Rod Stewart - Young Turks (Official Video)</h3>
                <p>Upload date: 2009-10-29T21:26:05Z</p>
                <h4>Channel's Title: Coderhouse</h4>
                <p>Official music video for Rod Stewart – Young Turks from 'Tonight I'm Yours' (1981) Listen to more Rod Stewart here: https://rhino.lnk.to/RodStewartStr ...</p>
                </div>
            </div>
        );
    }

}

export default Video;