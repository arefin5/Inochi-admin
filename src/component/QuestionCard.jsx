import React, { useEffect, useState } from 'react';
import axiosInterceptor from '../axios/axiosInterceptor';
import { useNavigate } from 'react-router-dom';

const QusetionCard = ({ data }) => {
    console.log(data);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  const api = axiosInterceptor();

//   useEffect(() => {
//     // Use the state from useAuth to determine authentication status
//     navigate('/update-session');
//   }, [navigate]);
// console.log(data)
 

  const handleDelete = async () => {
    // Show confirmation dialog
    setShowConfirmation(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await api.delete(`/delete-question/${data._id}`);
      if (response.status === 200) {
        // Reload the page upon successful deletion
        window.location.reload();
      } else {
        console.error('Error deleting team member:', response.data.error);
      }
    } catch (error) {
      console.error('Error deleting team member:', error);
    } finally {
      // Hide the confirmation dialog
      setShowConfirmation(false);
    }
  };
  

  const cancelDelete = () => {
    // Hide the confirmation dialog
    setShowConfirmation(false);
  };

  return (
    <div className="my-5">
     {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete?</p>
          <button className="btn btn-danger" onClick={confirmDelete}>
            Yes
          </button>
          <button className="btn btn-secondary" onClick={cancelDelete}>
            No
          </button>
        </div>
      )}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Question Name</th>
            <th scope="col">First Option</th>
            <th scope="col">Secend Option</th>
            <th scope="col">Third Option</th>
            <th scope="col">Answare</th>
            <th scope="col">Category</th>


            <th scope="col">Actions</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.questionName}</td>
            <td>{data.first}</td>
            <td>{data.second}</td>
            <td>{data.third}</td>
            
            <td>{data.answer}</td>
            <td>{data.category}</td>

            <td>
              <button className="btn btn-danger btn-sm" onClick={handleDelete}>
                Delete
              </button>
              <br/>

            </td>
          </tr>
        </tbody>
      </table>

     
    </div>
  );
};

export default QusetionCard;
