// ... (previous imports and components)

import { useState } from "react";
import axiosInterceptor from "../axios/axiosInterceptor";

const Documen = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [studentNid, setStudentNid] = useState("");
  const [branch, setBranch] = useState("");
  const [markSheetSSC, setMarkSheetSSC] = useState(null);
  const [markSheetHSC, setMarkSheetHSC] = useState(null);
  const api = axiosInterceptor();

  const handleStudent = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("studentNid", studentNid);
    formData.append("branch", branch);
    formData.append("markSheetSSC", markSheetSSC);
    formData.append("markSheetHSC", markSheetHSC);

    try {
      const response = await fetch("http://localhost:5000/api/uploadDocument", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setAlert({ type: "success", message: data.message });
    } catch (error) {
      console.error(error);
      setAlert({ type: "error", message: "Failed to upload document." });
    }
  };

  return (
    <div>
      {/* ... (previous JSX code) */}
      <div className="col">
        <form action className="needs-validation" noValidate onSubmit={handleStudent}>
        {/*  */}
        <div className="mb-3 row">
                      <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
                        Name:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className={`form-control ${!name.trim() ? 'is-invalid' : ''}`}
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a name.
                        </div>
                      </div>
                    </div>
                    {/* ... (other form fields) */}
                    <div className="mb-3 row">
                      <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
                        Student Nid:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className={`form-control ${!name.trim() ? 'is-invalid' : ''}`}
                          placeholder="Enter Student Nid"
                          value={studentNid}
                          onChange={(e) => setStudentNid(e.target.value)}
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a Student Name
                
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="mb-3 row">
                      <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
                        Branch :
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className={`form-control ${!name.trim() ? 'is-invalid' : ''}`}
                          placeholder="Enter Branch Name"
                          value={branch}
                          onChange={(e) =>setBranch(e.target.value)}
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a Branch name.
                        </div>
                      </div>
                    </div>
          {/* ... (previous form fields) */}
          <div className="mb-3 row">
            <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
              Mark Sheet SSC:
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                className={`form-control ${!markSheetSSC ? 'is-invalid' : ''}`}
                placeholder="Upload Mark Sheet SSC"
                onChange={(e) => setMarkSheetSSC(e.target.files[0])}
                required
              />
              <div className="invalid-feedback">
                Please upload Mark Sheet SSC.
              </div>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
              Mark Sheet HSC:
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                className={`form-control ${!markSheetHSC ? 'is-invalid' : ''}`}
                placeholder="Upload Mark Sheet HSC"
                onChange={(e) => setMarkSheetHSC(e.target.files[0])}
                required
              />
              <div className="invalid-feedback">
                Please upload Mark Sheet HSC.
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-10 text-center" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {alert && (
          <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-danger'} mt-3`}>
            {alert.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Documen;
