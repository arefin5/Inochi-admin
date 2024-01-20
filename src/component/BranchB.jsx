// /all-student

import React, { useEffect, useState } from 'react';
import axiosInterceptor from '../axios/axiosInterceptor';
import { Avatar } from 'antd';


const BranchB = () => {
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(null); // null for no edit, student ID for edit mode
  const api = axiosInterceptor();

  useEffect(() => {
    fetchUserStudents();
  }, []);

  const fetchUserStudents = async () => {
    try {
      const { data } = await api.get("/all-students/branchb");
      // console.log("data users", data);

      setStudents(data );
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (id) => {
    setEditMode(id);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
  };

  const handleSaveEdit = async (id) => {
    // Implement your save edit logic
    try {
      // Send a PUT request to update the student data
      await api.put(`/update-student/${id}`, {
        // Pass the updated data here
        // For example: name, education, phone, etc.
      });
      // After successful update, exit edit mode and refresh the student list
      setEditMode(null);
      fetchUserStudents();
    } catch (error) {
      console.error(`Error saving edit for student with id ${id}`, error);
    }
  };

  return (
    <div>
      <h2 className="text-center">Student List</h2>
      <table className="table text-center" style={{ width: '80%', margin: 'auto' }}>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Education</th>
            <th scope="col">Phone</th>
            {/* email */}
            {/* parent */}
            {/* image */}
            <th scope="col">Email</th>
            <th scope="col"> Address</th>
            <th scope="col">Image</th>
            <th scope="col">Father</th>
            <th scope="col">Mother</th>
            <th scope="col">ClassRole</th>
            <th scope="col">Role</th>

            {/* <th scope="col">Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{index + 1}</td>
             <td>{student.name}</td>
               <td>{student.education}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td>{student.parent}</td>
              <td>
              <Avatar/>
              </td>
              <td>{student.father}</td>
              <td>{student.mother}</td>
              <td>{student.rool}</td>
              <td>{student.role}</td>


{/* 
              <td>
                {editMode === student._id ? (
                  <input
                    type="text"
                    value={student.rool} // Replace with the corresponding field
                    onChange={(e) => {
                      // Handle input changes during edit mode
                      // Update the corresponding state accordingly
                    }}
                  />
                ) : (
                  student.rool
                )}
              </td>
              <td>
                {editMode === student._id ? (
                  <input
                    type="text"
                    value={student.education} // Replace with the corresponding field
                    onChange={(e) => {
                      // Handle input changes during edit mode
                      // Update the corresponding state accordingly
                    }}
                  />
                ) : (
                  student.education
                )}
              </td>
              <td>{student.role}</td>
              <td>
                {editMode === student._id ? (
                  <>
                    <button
                      className="btn btn-success mr-2"
                      onClick={() => handleSaveEdit(student._id)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-primary mr-2"
                    onClick={() => handleEdit(student._id)}
                  >
                    Edit
                  </button>
                )}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BranchB;


