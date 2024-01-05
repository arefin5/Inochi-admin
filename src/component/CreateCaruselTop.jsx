
import React, { useState, useEffect } from 'react';
import axiosInterceptor from '../axios/axiosInterceptor';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CreateCaruselTop = () => {
    const [category, setCategory] = useState('');
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const [id, setId] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const api = axiosInterceptor();
    const navigate = useNavigate(); // Use useNavigate to get the navigate function


    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);
        setUploading(true);
        try {
            const { data } = await api.post("/upload", formData);
            setId({
                id: data.public_id,
            });
            setUploading(false);
        } catch (err) {
            console.error('Error uploading image:')
            setUploading(false);
        }
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const public_id = id.id;
            const { data } = await api.post("/create-carusel", {
                public_id,
                category,
            });
            if (data && data.success) {
                setSuccessMessage("Top Carusel  created successfully!");
               
            // Reload the page or navigate to the desired route
            navigate("/create-crusel");
        } else {
            console.error("Error: Unexpected response from server");
        }
            // if successful then reload
            navigate("/create-crusel")
        } catch (err) {
            console.error("Error:", err);
        }
    };
    return (
        <div>


            <label>Category:</label>
            <select value={category} onChange={handleCategoryChange}>
                <option value="" disabled>Select a category</option>
                <option value="top">Top</option>
            </select>
            <label>Image:</label>
            <input type="file" onChange={handleImageChange}
            />

            <button onClick={handleSubmit}
                disabled={!id.id && id.id !== 0}

            >Submit</button>
            {successMessage && <p>{successMessage}</p>}

        </div>
    );
};
export default CreateCaruselTop