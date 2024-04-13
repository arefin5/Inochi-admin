import React from 'react';

const PendingCarusel = ({ data, handleDelete, handleApprove }) => {
  // Uncomment the following line if you need to use state for image
  // const [image, setImage] = useState(data.image);

  // Use let to declare a variable
  let imageUrl = data.image && data.image.url;
  const isImageDefined = data.image !== undefined;

// console.log(data)
  return (
    <>
      {isImageDefined &&  (
        <div className="my-5">
        <h1>Carusel List</h1>
          <div className="row my-lg-4">
            <div>
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  {/* Use imageUrl instead of data.image.url */}
                  <img src={imageUrl} alt="Bootstrap" width={150} height={150} /><br />
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
      ) }
    </>
  );
};

export default PendingCarusel;
