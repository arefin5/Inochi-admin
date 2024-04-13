
// import React, { useState, useEffect } from 'react';
// import axiosInterceptor from '../axios/axiosInterceptor';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const CreateCaruselTop = () => {
//     const [category, setCategory] = useState('');
//     const [image, setImage] = useState({});
//     const [uploading, setUploading] = useState(false);
//     const [id, setId] = useState({});
//     const [successMessage, setSuccessMessage] = useState('');
//     const api = axiosInterceptor();
//     const navigate = useNavigate(); // Use useNavigate to get the navigate function


//     const handleImageChange = async (e) => {
//         const file = e.target.files[0];
//         let formData = new FormData();
//         formData.append("image", file);
//         // setUploading(true);
//         try {
//             const response = await api.post("/upload-image-file", formData);
//             if (response && response.data && response.data) {
//                 console.log(response.data)
//                 setImage({
//                     url: response.data.url,
//                     public_id: response.data.public_id,
//                 });
//                 setUploading(false);
//                 setSuccessMessage('Image uploaded successfully.');
//             } else {
//                 setErrorMessage("Failed to upload image. Please try again.");
//             }
//         } catch (err) {
//             console.error('Error uploading image:', err);
//             setErrorMessage("Failed to upload image. Please try again.");
//         } finally {
//             setUploading(false);
//         }
//     };
      

//     const handleCategoryChange = (event) => {
//         setCategory(event.target.value);
//     };

//     const handleSubmit = async () => {
//         console.log("image",image)
//         try {
//             const { data } = await api.post("/create-carusel", {
//                 image,
//                 category,
//             });
//             if (data && data.success) {
//                 setSuccessMessage("Top Carusel  created successfully!");
               
//             // Reload the page or navigate to the desired route
//             navigate("/create-crusel");
//         } else {
//             console.error("Error: Unexpected response from server");
//         }
//             // if successful then reload
//             navigate("/create-crusel")
//         } catch (err) {
//             console.error("Error:", err);
//         }
//     };
//     return (
//         <div>


//             <label>Category:</label>
//             <select value={category} onChange={handleCategoryChange}>
//                 <option value="" disabled>Select a category</option>
//                 <option value="top">Top</option>
//             </select>
//             <label>Image:</label>
//             <input type="file" onChange={handleImageChange}
//             />

//             <button onClick={handleSubmit}
//                 disabled={uploading}

//             >Submit</button>
//             {successMessage && <p>{successMessage}</p>}

//         </div>
//     );
// };
// export default CreateCaruselTop



import React, { useState } from 'react';
import axiosInterceptor from '../axios/axiosInterceptor';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CreateCaruselTop = () => {
    const [category, setCategory] = useState('');
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const api = axiosInterceptor();
    const navigate = useNavigate();

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);

        try {
            const response = await api.post("/upload-image-file", formData);
            if (response && response.data && response.data.url && response.data.public_id) {
                setImage({
                    url: response.data.url,
                    public_id: response.data.public_id,
                });
                setSuccessMessage('Image uploaded successfully.');
            } else {
                throw new Error("Failed to upload image. Please try again.");
            }
        } catch (err) {
            console.error('Error uploading image:', err);
            setSuccessMessage("Failed to upload image. Please try again.");
        }
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const { data } = await axios.post("http://45.77.247.238:5000/api/create-carusel", {
                image,
                category,
            });
            if (data && data.success) {
                setSuccessMessage("Top Carusel created successfully!");
                navigate("/create-crusel");
            } else {
                throw new Error("Unexpected response from server");
            }
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
            <input type="file" onChange={handleImageChange} />

            <button onClick={handleSubmit} disabled={uploading}>Submit</button>

            {successMessage && <p>{successMessage}</p>}
        </div>
    );
};

export default CreateCaruselTop;
