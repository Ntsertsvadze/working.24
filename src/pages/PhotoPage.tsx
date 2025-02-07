import React, { useEffect, useState } from "react"
import { IPhoto} from "../interface/photo.interface";

const TodoPage: React.FC = () => {
    const [todos, setPhotos] = useState<IPhoto[]>([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then((data: IPhoto[]) => setPhotos(data))
    }, [])
    
    return <h1>
        {todos.map(({albumId, id, title, url, thumbnailUrl}) =>
            <div key={id}>
                <h3>{albumId}</h3>
                <h3>{title}</h3>
                <h3>{url}</h3>
                <h3>{thumbnailUrl}</h3>
            </div>

        )}
    </h1>;
   
}

export default TodoPage