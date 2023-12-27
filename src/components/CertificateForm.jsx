// src/components/CertificateForm.js
import React, { useState } from 'react';

const CertificateForm = ({ onGenerate }) => {
  const [recipientName, setRecipientName] = useState('');

  const handleGenerate = () => {
    onGenerate(recipientName);
  };

  return (
    <div>
      <label>Recipient Name:</label>
      <input
        type="text"
        value={recipientName}
        onChange={(e) => setRecipientName(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate Certificate</button>
    </div>
  );
};

export default CertificateForm;
