
import React, { useState } from 'react';

const CreateCaruselTop = () => {
    const [category, setCategory] = useState('');
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const [id, setId] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);
        setUploading(true);

        try {
            const { data } = await axios.post("/upload", formData);
            setId({
                id: data.public_id,
            });
            setUploading(false);
        } catch (err) {
            console.error('Error uploading image:', err);
            setUploading(false);
        }
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const public_id = id.id;
            const { data } = await axios.post("/create-carusel", {
                public_id,
                category,
            });
            setSuccessMessage("Top Carusel  created successfully!");

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
                <option value="bottom">Bottom </option>
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