import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PhotoDetail = () => {
    const [photo, setPhoto] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
                const data = await response.json();
                setPhoto(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPhoto();
    }, [id]);

    const handleBack = () => {
        navigate(-1);
    };

    if (!photo) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{photo.title}</h2>
            <img src={photo.url} alt={photo.title} />
            <button onClick={handleBack}>Back</button>
        </div>
    );
};

export default PhotoDetail;