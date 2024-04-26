// /all-student

import React, { useEffect, useState } from 'react';
import axiosInterceptor from '../axios/axiosInterceptor';
import { Avatar } from 'antd';

const Subscriberlist = () => {
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(null); // null for no edit, student ID for edit mode
  const api = axiosInterceptor();
  useEffect(() => {
    fetchUserStudents();
  }, []);

  const fetchUserStudents = async () => {
    try {
      const { data } = await api.get("/subscriber");
      // console.log("data users", data.subscribers);

      setStudents( data.subscribers );
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
      <h2 className="text-center">Subscriber  List</h2>
      <table className="table text-center" style={{ width: '80%', margin: 'auto' }}>
        <thead>
          <tr>
            <th scope="col">No</th>
           
           
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{index + 1}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Subscriberlist;


