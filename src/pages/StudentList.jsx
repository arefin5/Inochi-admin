import React, { useEffect, useState } from 'react';
import axiosInterceptor from '../axios/axiosInterceptor';

const StudentList = () => {
  const [students, setStudent] = useState([]);
  const api = axiosInterceptor();
  
  useEffect(() => {
    fetchUserSudent();
  }, []);
  const fetchUserSudent = async () => {
    try {
      const { data } = await api.get("/all-student");
      setStudent(data.users);
      console.log("data users",data.users)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="text-center">Alphabet Chart</h2>
      <table className="table text-center" style={{ width: '80%', margin: 'auto' }}>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Class</th>
            <th scope="col">Branch</th>
            <th scope="col">Student Id</th>
            <th scope="col">Account Type</th>
          </tr>
        </thead>
        <tbody>
        {students.map((user, index) => (
  <tr key={index}>
    <td>{index + 1}</td>
    <td>{user.address}</td>
  </tr>
))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
