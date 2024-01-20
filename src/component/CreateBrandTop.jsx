
import React, { useState, useEffect } from 'react';
import axiosInterceptor from '../axios/axiosInterceptor';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CreateBrandTop = () => {
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
        // setUploading(true);
        try {
            const response = await api.post("/upload-image-file", formData);
            if (response && response.data && response.data) {
                // console.log(response.data)
                setImage({
                    url: response.data.url,
                    public_id: response.data.public_id,
                });
                setUploading(false);
                setSuccessMessage('Image uploaded successfully.');
            } else {
                setErrorMessage("Failed to upload image. Please try again.");
            }
        } catch (err) {
            console.error('Error uploading image:', err);
            setErrorMessage("Failed to upload image. Please try again.");
        } finally {
            setUploading(false);
        }
    };
      

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSubmit = async () => {
        console.log(image.url)
        try {
            const { data } = await api.post("/brand", {
                image,
            });
            if (data && data.success) {
                setSuccessMessage("Brand  created successfully!");
                           navigate("/create-brand");
        } else {
            console.error("Error: Unexpected response from server");
        }
            navigate("/create-brand")
        } catch (err) {
            console.error("Error:", err);
        }
    };
    return (
        <div>
            <label>Image:</label>
            <input type="file" onChange={handleImageChange}
            />
            <button onClick={handleSubmit}
                disabled={uploading}
                className='btn btn-success'
            >
            Submit</button>
            {successMessage && <p>{successMessage}</p>}

        </div>
    );
};
export default CreateBrandTop