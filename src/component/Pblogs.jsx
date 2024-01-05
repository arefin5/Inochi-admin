import React, { useState } from 'react';
import ImageConverter from './ImageConverter';

const Plbogs = ({ data, handleDelete, handleEdit, handleApprove }) => {
  const [storedBase64Data, setStoredBase64Data] = useState('');

  const handleBase64Data = () => {
    setStoredBase64Data();
  };

  // Check if data.image is defined before rendering the ImageConverter
  const isImageDefined = data.image !== undefined;

  return (
    <>
      
    </>
  );
};

export default Plbogs;
