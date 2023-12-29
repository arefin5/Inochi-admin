import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getAllData');
        setDocuments(response.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  const convertBinaryToBase64 = (binaryData) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(new Blob([binaryData]));
    });
  };

  const renderImages = (document) => {
    return (
      <React.Fragment>
        {document.markSheetSSC && (
          <div>
            <p>Mark Sheet SSC:</p>
            <img
              src={`data:image/jpeg;base64,${document.markSheetSSC.data}`}
              alt="Mark Sheet SSC"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        )}

        {document.markSheetHSC && (
          <div>
            <p>Mark Sheet HSC:</p>
            <img
              src={`data:image/jpeg;base64,${document.markSheetHSC.data}`}
              alt="Mark Sheet HSC"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        )}
      </React.Fragment>
    );
  };

  return (
    <div>
      <h2>Uploaded Documents</h2>
      {documents.map((document) => (
        <div key={document._id} style={{ marginBottom: '20px' }}>
          <p>Name: {document.name}</p>
          <p>Branch: {document.branch}</p>

          {/* Render images dynamically */}
          {renderImages(document)}

          <hr />
        </div>
      ))}
    </div>
  );
};

export default DocumentList;
