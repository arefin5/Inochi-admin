// import React, { useState } from 'react';
// import ImageConverter from './ImageConverter';

// const PendingBlogs = ({ data, handleDelete, handleEdit, handleApprove }) => {
//   const [storedBase64Data, setStoredBase64Data] = useState('');
//   const [selectedProperties, setSelectedProperties] = useState({
//     property1: false,
//     property2: false,
//     property3: false,
//     // Add more properties as needed
//   });

//   const handleBase64Data = (data) => {
//     setStoredBase64Data(data);
//   };

//   const handleCheckboxChange = (property) => {
//     setSelectedProperties({
//       ...selectedProperties,
//       [property]: !selectedProperties[property],
//     });
//   };

//   const handleEditClick = () => {
//     // Call the handleEdit function and pass the selected properties
//     handleEdit(data._id, selectedProperties);
//   };

//   return (
//     <>
//       <ImageConverter id={data.image.public_id} onBase64Data={handleBase64Data} />
//       {storedBase64Data ? (
//         <div className="my-5">
//           <div className="row my-lg-4">
//             <div>
//               <div className="card shadow rounded">
//                 <div className="card-body text-center">
//                   <img src={storedBase64Data} alt="Bootstrap" width={150} height={150} /><br />
//                   <p className="text-center mb-5"><b>{data.category}</b></p>

//                   {/* Checkboxes for properties */}
//                   <div className="d-flex justify-content-around">
//                     <label>
//                       <input
//                         type="checkbox"
//                         checked={selectedProperties.property1}
//                         onChange={() => handleCheckboxChange('service')}
//                       />
//                       service
//                     </label>
//                     <label>
//                       <input
//                         type="checkbox"
//                         checked={selectedProperties.property2}
//                         onChange={() => handleCheckboxChange('')}
//                       />
//                       stuysatle
//                     </label>
//                     <label>
//                       <input
//                         type="checkbox"
//                         checked={selectedProperties.property2}
//                         onChange={() => handleCheckboxChange('')}
//                       />
//                       blogs
//                     </label>
//                     {/* Add more checkboxes as needed */}
//                   </div>

//                   {/* Buttons for delete, edit, and approve */}
//                   <div className="d-flex justify-content-around">
//                     <button onClick={() => handleDelete(data._id)}>Delete</button>
//                     <button onClick={handleEditClick}>Edit</button>
//                     <button onClick={() => handleApprove(data._id)}>Approve</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <></>
//       )}
//     </>
//   );
// };

// export default PendingBlogs;
import React, { useState } from 'react';
import ImageConverter from './ImageConverter';

import axiosInterceptor from "../axios/axiosInterceptor.js"
const PendingBlogs = ({ data, handleDelete, handleApprove }) => {
  const [storedBase64Data, setStoredBase64Data] = useState('');
  const [selectedTags, setSelectedTags] = useState({
    blogs: false,
    study: false,
    service: false,
  });
  const api = axiosInterceptor()
  const handleBase64Data = (data) => {
    setStoredBase64Data(data);
  };
// console.log(data)
  const handleCheckboxChange = (tag) => {
    setSelectedTags({
      ...selectedTags,
      [tag]: !selectedTags[tag],
    });
  };

  // Check if data.image is defined before rendering the ImageConverter
  const isImageDefined = data.image !== undefined;

  const handleApproveClick = async () => {
    try {
      // Create a payload object with the selected tags
      const payload = {
        tags: selectedTags,
        status: 'published',
        // Include other data you want to send to the backend for approval
      };

      // Make a request to approve the data with the specified ID and send the payload
      await api.put(`/approve-blog/${data._id}`, payload);

      // Refresh the data after approval
      // fetchUserBlogs();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>

      {data ? (
        <div className="my-5">
          <div className="row my-lg-4">
            <div>
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  
                {isImageDefined && (
  <img
    src={data.image.url}
    alt="Bootstrap"
    width={150}
    height={150}
  />
)}

              

                  <br />
                  <p className="text-center mb-5">
                    <b> {data.content}</b>
                  </p>
                  <p className="text-center mb-5">
                    <b>{data.category}</b>
                  </p>
                  {/* <p className="text-center mb-5">
                    <b>Email: {data.author}</b>
                  </p> */}
                  {/* Checkboxes for tags */}
                  <div className="d-flex justify-content-around">
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedTags.blogs}
                        onChange={() => handleCheckboxChange('blogs')}
                      />
                      Blogs
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedTags.study}
                        onChange={() => handleCheckboxChange('study')}
                      />
                      Study
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedTags.service}
                        onChange={() => handleCheckboxChange('service')}
                      />
                      Service
                    </label>
                  </div>

                  {/* Buttons for delete, and approve */}
                  <div className="d-flex justify-content-around">
                    <button onClick={() => handleDelete(data._id)}>
                      Delete
                    </button>
                    <button onClick={handleApproveClick}>Approve</button>
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

export default PendingBlogs;
