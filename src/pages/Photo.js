import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Photo() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => {
                setPhotos(data);
            });
    }, []);

    return (
        <div>
            <h2>Photos</h2>
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Photo;
