import React, { useState, useEffect } from 'react';
import axiosInterceptor from '../axios/axiosInterceptor';
import { useNavigate } from 'react-router-dom';

const CreateServiceTop = () => {
  const [category, setCategory] = useState('');
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [id, setId] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const api = axiosInterceptor();
  const navigate = useNavigate();

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
      console.error('Error uploading image:', err);
      setUploading(false);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCheckboxChange = (value) => {
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter(item => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  const handleSubmit = async () => {
    try {
      const public_id = id.id;
      const { data } = await api.post("/create-carusel", {
        public_id,
        selectedItems, // Include the selected items in the request
      });
      if (data && data.success) {
        setSuccessMessage("Service Page created successfully!");
        navigate("/create-crusel");
      } else {
        console.error("Error: Unexpected response from server");
      }
      navigate("/create-crusel");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <label>Image:</label>
      <input type="file" onChange={handleImageChange} />
      
      <div>
      <label>Image:</label>

        <label>
          <input
            type="checkbox"
            value="item1"
            checked={selectedItems.includes("item1")}
            onChange={() => handleCheckboxChange("item1")}
          />
          Item 1
        </label>
        <label>
          <input
            type="checkbox"
            value="item2"
            checked={selectedItems.includes("item2")}
            onChange={() => handleCheckboxChange("item2")}
          />
          Item 2
        </label>
        <label>
          <input
            type="checkbox"
            value="item3"
            checked={selectedItems.includes("item3")}
            onChange={() => handleCheckboxChange("item3")}
          />
          Item 3
        </label>
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={!id.id && id.id !== 0 && selectedItems.length === 0}
      >
        Submit
      </button>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default CreateServiceTop;
