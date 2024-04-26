// /all-student

import React, { useEffect, useState } from 'react';
import axiosInterceptor from '../axios/axiosInterceptor';
import { Avatar } from 'antd';

const Contac = () => {
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(null); // null for no edit, student ID for edit mode
  const api = axiosInterceptor();
  useEffect(() => {
    fetchUserStudents();
  }, []);

  const fetchUserStudents = async () => {
    try {
      const { data } = await api.get("all-contact-request");
      // console.log("data users", data.contacts);

      setStudents( data.contacts );
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



  return (
    <div>
      <h2 className="text-center">Contact   List</h2>
      <table className="table text-center" style={{ width: '80%', margin: 'auto' }}>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
           
            <th scope="col">Email</th>
            <th scope="col">Messege</th>

          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{index + 1}</td>
             <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td>{student.msg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contac;


