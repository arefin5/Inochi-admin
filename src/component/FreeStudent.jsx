import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import axiosInterceptor from '../axios/axiosInterceptor';

const FreeStudent = () => {
  const [students, setStudents] = useState([]);
  const [role, setRole] = useState("gust");
  const [editMode, setEditMode] = useState({ id: null, field: 'role' });
  const api = axiosInterceptor();

  useEffect(() => {
    fetchUserStudents();
  }, []);

  const fetchUserStudents = async () => {
    try {
      const { data } = await api.get("/all-guset");
      console.log("data users", data);
      setStudents(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (id) => {
    setEditMode({ id, field: 'role' });
  };

  const handleCancelEdit = () => {
    setEditMode({ id: null, field: 'role' });
  };

  const handleSaveEdit = async (id, updatedValue) => {
    console.log(role)
    try {
      await api.put(`/change-role/${id}`, {
role
      });
      setEditMode({ id: null, field: 'role' });
      fetchUserStudents();
    } catch (error) {
      console.error(`Error saving edit for student with id ${id}`, error);
    }
  };

  return (
    <div>
      <table className="table text-center" style={{ width: '80%', margin: 'auto' }}>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Education</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Image</th>
            <th scope="col">Father</th>
            <th scope="col">Mother</th>
            <th scope="col">ClassRole</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
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
                <Avatar />
              </td>
              <td>{student.father}</td>
              <td>{student.mother}</td>
              <td>{student.rool}</td>
              <td>
                {editMode.id === student._id ? (
                  <input
                    type="text"
                    value={role} // Use the role state here
                    onChange={(e) => setRole(e.target.value)}
                  />
                ) : (
                  student.role
                )}
              </td>
              <td>
                {editMode.id === student._id ? (
                  <>
                    <button
                      className="btn btn-success mr-2"
                      onClick={() => handleSaveEdit(student._id, role)}
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
                    Edit Role
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FreeStudent;
