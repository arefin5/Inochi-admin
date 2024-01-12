// import React, { useEffect, useState } from 'react';
// import { Avatar, Select } from 'antd';
// import axiosInterceptor from '../axios/axiosInterceptor';

// const { Option } = Select;

// const FreeStudent = () => {
//   const [students, setStudents] = useState([]);
//   const [editMode, setEditMode] = useState({ id: null, field: null });
//   const [userData, setUserData] = useState({ role: "gust", branch: "A" });
//   const api = axiosInterceptor();

 
//   const handleEdit = (id, field) => {
//     setEditMode({ id, field });
//   };

//   const handleCancelEdit = () => {
//     setEditMode({ id: null, field: null });
//   };

//   const handleSaveEdit = async (id, updatedValue) => {
//     const endpoint = editMode.field === 'role' ? `/change-role/${id}` : `/change-branch/${id}`;

//     try {
//       await api.put(endpoint, { [editMode.field]: updatedValue });
//       setEditMode({ id: null, field: null });
//       // fetchUserStudents();
//     } catch (error) {
//       console.error(`Error saving edit for student with id ${id}`, error);
//     }
//   };

//   return (
//     <div>
//       <table className="table text-center" style={{ width: '80%', margin: 'auto' }}>
//         <thead>
//           <tr>
//             <th scope="col">No</th>
//             <th scope="col">Name</th>
//             <th scope="col">Education</th>
//             <th scope="col">Phone</th>
//             <th scope="col">Email</th>
//             <th scope="col">Address</th>
//             <th scope="col">Image</th>
//             <th scope="col">Father</th>
//             <th scope="col">Mother</th>
//             <th scope="col">ClassRole</th>
//             <th scope="col">Branch</th>
//             <th scope="col">Role</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student, index) => (
//             <tr key={student._id}>
//               <td>{index + 1}</td>
//               <td>{student.name}</td>
//               <td>{student.education}</td>
//               <td>{student.phone}</td>
//               <td>{student.email}</td>
//               <td>{student.parent}</td>
//               <td>
//                 <Avatar />
//               </td>
//               <td>{student.father}</td>
//               <td>{student.mother}</td>
//               <td>{student.rool}</td>
//               <td>
//                 {editMode.id === student._id ? (
//                   <Select
//                     style={{ width: 120 }}
//                     value={editMode.field === 'branch' ? student.branch : userData.branch}
//                     onChange={(value) => setUserData({ ...userData, [editMode.field]: value })}
//                   >
//                     <Option value="A">A</Option>
//                     <Option value="B">B</Option>
//                   </Select>
//                 ) : (
//                   student.branch
//                 )}
//               </td>
//               <td>
//                 {editMode.id === student._id ? (
//                   <Select
//                     style={{ width: 120 }}
//                     value={userData.role}
//                     onChange={(value) => setUserData({ ...userData, role: value })}
//                   >
//                     <Option value="student">Student</Option>
//                     <Option value="admin">Admin</Option>
//                   </Select>
//                 ) : (
//                   student.role
//                 )}
//               </td>
//               <td>
//                 {editMode.id === student._id ? (
//                   <>
//                     <button
//                       className="btn btn-success mr-2"
//                       onClick={() => handleSaveEdit(student._id, userData[editMode.field])}
//                     >
//                       Save
//                     </button>
//                     <button
//                       className="btn btn-secondary"
//                       onClick={handleCancelEdit}
//                     >
//                       Cancel
//                     </button>
//                   </>
//                 ) : (
//                   <button
//                     className="btn btn-primary mr-2"
//                     onClick={() => handleEdit(student._id, 'role')}
//                   >
//                     Edit Role
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FreeStudent;


  import React, { useEffect, useState } from 'react';
import { Avatar, Select } from 'antd';
import axiosInterceptor from '../axios/axiosInterceptor';

const { Option } = Select;

const FreeStudent = () => {
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState({ id: null, field: null });
  const [userData, setUserData] = useState({ role: "gust", branch: "A" });
  const api = axiosInterceptor();

  useEffect(() => {
    fetchUserStudents();
  }, []);
  const fetchUserStudents = async () => {
    try {
      const { data } = await api.get("/all-guset");
      // console.log("data users", data);
      setStudents(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (id, field) => {
    setEditMode({ id, field });
  };

  const handleCancelEdit = () => {
    setEditMode({ id: null, field: null });
  };

  const handleSaveEdit = async (id, updatedValueRole, updatedValueBranch) => {
    const endpoint = `/change-role/${id}`;
   

try {
  await api.put(endpoint, { role: updatedValueRole, branch: updatedValueBranch });
  setEditMode({ id: null, field: null });
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
            <th scope="col">Branch</th>
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
                  <Select
                    style={{ width: 120 }}
                    value={editMode.field === 'branch' ? student.branch : userData.branch}
                    onChange={(value) => setUserData({ ...userData, branch: value })}
                  >
                    <Option value="A">A</Option>
                    <Option value="B">B</Option>
                  </Select>
                ) : (
                  student.branch
                )}
              </td>
              <td>
                {editMode.id === student._id ? (
                  <Select
                    style={{ width: 120 }}
                    value={userData.role}
                    onChange={(value) => setUserData({ ...userData, role: value })}
                  >
                    <Option value="student">Student</Option>
                    <Option value="admin">Admin</Option>
                  </Select>
                ) : (
                  student.role
                )}
              </td>
              <td>
                {editMode.id === student._id ? (
                  <>
                    <button
                      className="btn btn-success mr-2"
                      onClick={() => handleSaveEdit(student._id, userData.role, userData.branch)}
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
                    onClick={() => handleEdit(student._id, 'role')}
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
