import React, { useState } from 'react';
import ImageConverter from './ImageConverter';

const PendingCarusel = ({ data, handleDelete, handleEdit, handleApprove }) => {
  const [storedBase64Data, setStoredBase64Data] = useState('');
  const handleBase64Data = (data) => {
    setStoredBase64Data(data);
  };

  console.log(data.image.public_id);

  return (
    <>
      <ImageConverter id={data.image.public_id} onBase64Data={handleBase64Data} />
      {storedBase64Data ? (
        <div className="my-5">
          <div className="row my-lg-4">
            <div>
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <img src={storedBase64Data} alt="Bootstrap" width={150} height={150} /><br />
                  <p className="text-center mb-5"><b>{data.category}</b></p>

                  {/* Buttons for delete, edit, and approve */}
                  <div className="d-flex justify-content-around">
                    <button onClick={() => handleDelete(data._id)}>Delete</button>
                    <button onClick={() => handleApprove(data._id)}>Approve</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PendingCarusel;
