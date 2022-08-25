import { useEffect } from 'react';
import Video from './Video';

const Videos = (props) => {

    //componentDidMount
    useEffect(() => {
        console.log("Soy el Container Videos")
    }, [])

    return (
        <>
        {
            props.items.map(item => (
              <Video 
                key={item.id}
                title={item.title}
                dateAdded={item.dateAdded}
                channel={item.channel}
                thumbnail={item.thumbnail}
                description={item.description} />
            ))
        }
        </>
    );
}

export default Videos;