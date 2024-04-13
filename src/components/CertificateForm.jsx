// import React, { useRef, useState } from 'react';

// const CertificateForm = ({ onGenerate }) => {
//   const [formData, setFormData] = useState({
//     recipientName: '',
//     courseName: '',
//     completionDate: '',
//     ref: '',
//     studentId: '',
//     startDate: '',
//     endDate: '',
//     levelOfLanguageLearning: '',
//     referenceBook: '',
//     totalNumberOfClasses: '',
//     totalNumberOfClassesPerDay: '',
//     totalDurationOfClassPerWeek: '',
//     classTime: '',
//     applicantAttendanceRate: '',
//     classTestParticipationRate: '',
//     listening: '',
//     speaking: '',
//     reading: '',
//     writing: '',
//     // Add more fields as needed
//   });

//   const recipientNameRef = useRef();
//   const courseNameRef = useRef();
//   const completionDateRef = useRef();
//   const refRef = useRef();
//   const studentIdRef = useRef();
//   const startDateRef = useRef();
//   const endDateRef = useRef();
//   const levelOfLanguageLearningRef = useRef();
//   const referenceBookRef = useRef();
//   const totalNumberOfClassesRef = useRef();
//   const totalNumberOfClassesPerDayRef = useRef();
//   const totalDurationOfClassPerWeekRef = useRef();
//   const classTimeRef = useRef();
//   const applicantAttendanceRateRef = useRef();
//   const classTestParticipationRateRef = useRef();
//   const listeningRef = useRef();
//   const speakingRef = useRef();
//   const readingRef = useRef();
//   const writingRef = useRef();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleGenerate = () => {
//     onGenerate(formData);
//   };

//   return (
//     <div>
//       <label>Student Name:</label>
//       <input
//         type="text"
//         name="recipientName"
//         value={formData.recipientName}
//         onChange={handleChange}
//         ref={recipientNameRef}
//       /><br />
//       <label>Course Name:</label>
//       <input
//         type="text"
//         name="courseName"
//         value={formData.courseName}
//         onChange={handleChange}
//         ref={courseNameRef}
//       /><br />
//       <label>Completion Date:</label>
//       <input
//         type="text"
//         name="completionDate"
//         value={formData.completionDate}
//         onChange={handleChange}
//         ref={completionDateRef}
//       /><br />
//       <label>Ref:</label>
//       <input
//         type="text"
//         name="ref"
//         value={formData.ref}
//         onChange={handleChange}
//         ref={refRef}
//       /><br />
//       <label>Student ID:</label>
//       <input
//         type="text"
//         name="studentId"
//         value={formData.studentId}
//         onChange={handleChange}
//         ref={studentIdRef}
//       /><br />
//       <label>Start Date:</label>
//       <input
//         type="text"
//         name="startDate"
//         value={formData.startDate}
//         onChange={handleChange}
//         ref={startDateRef}
//       /><br />
//       <label>End Date:</label>
//       <input
//         type="text"
//         name="endDate"
//         value={formData.endDate}
//         onChange={handleChange}
//         ref={endDateRef}
//       /><br />
//       <label>Level Of Language Learning:</label>
//       <input
//         type="text"
//         name="levelOfLanguageLearning"
//         value={formData.levelOfLanguageLearning}
//         onChange={handleChange}
//         ref={levelOfLanguageLearningRef}
//       /><br />
//       <label>Reference Book:</label>
//       <input
//         type="text"
//         name="referenceBook"
//         value={formData.referenceBook}
//         onChange={handleChange}
//         ref={referenceBookRef}
//       /><br />
//       <label>Total Number of Classes:</label>
//       <input
//         type="text"
//         name="totalNumberOfClasses"
//         value={formData.totalNumberOfClasses}
//         onChange={handleChange}
//         ref={totalNumberOfClassesRef}
//       /><br />
//       <label>Total Number of Classes Per Day:</label>
//       <input
//         type="text"
//         name="totalNumberOfClassesPerDay"
//         value={formData.totalNumberOfClassesPerDay}
//         onChange={handleChange}
//         ref={totalNumberOfClassesPerDayRef}
//       /><br />
//       <label>Total Duration of Class per Week:</label>
//       <input
//         type="text"
//         name="totalDurationOfClassPerWeek"
//         value={formData.totalDurationOfClassPerWeek}
//         onChange={handleChange}
//         ref={totalDurationOfClassPerWeekRef}
//       /><br />
//       <label>Class Time:</label>
//       <input
//         type="text"
//         name="classTime"
//         value={formData.classTime}
//         onChange={handleChange}
//         ref={classTimeRef}
//       /><br />
//       <label>Applicant Attendance Rate:</label>
//       <input
//         type="text"
//         name="applicantAttendanceRate"
//         value={formData.applicantAttendanceRate}
//         onChange={handleChange}
//         ref={applicantAttendanceRateRef}
//       /><br />
//       <label>Class Test Participation Rate:</label>
//       <input
//         type="text"
//         name="classTestParticipationRate"
//         value={formData.classTestParticipationRate}
//         onChange={handleChange}
//         ref={classTestParticipationRateRef}
//       /><br />
//       <label>Listening:</label>
//       <input
//         type="text"
//         name="listening"
//         value={formData.listening}
//         onChange={handleChange}
//         ref={listeningRef}
//       /><br />
//       <label>Speaking:</label>
//       <input
//         type="text"
//         name="speaking"
//         value={formData.speaking}
//         onChange={handleChange}
//         ref={speakingRef}
//       /><br />
//       <label>Reading:</label>
//       <input
//         type="text"
//         name="reading"
//         value={formData.reading}
//         onChange={handleChange}
//         ref={readingRef}
//       /><br />
//       <label>Writing:</label>
//       <input
//         type="text"
//         name="writing"
//         value={formData.writing}
//         onChange={handleChange}
//         ref={writingRef}
//       /><br />

//       <button onClick={handleGenerate}>Generate Certificate</button>
//     </div>
//   );
// };

// export default CertificateForm;
// 

import React, { useRef, useState } from 'react';

const CertificateForm = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    recipientName: '',
    sl:'',
    birth:"",
    grade:"",
    fatherName:"",
    motherName:" ",
    courseName: '',
    completionDate: '',
    referanceof: '',
    studentId: '',
    startDate: '',
    endDate: '',
    levelOfLanguageLearning: '',
    referenceBook: '',
    totalNumberOfClasses: '',
    totalNumberOfClassesPerDay: '',
    totalDurationOfClassPerWeek: '',
    classTime: '',
    applicantAttendanceRate: '',
    classTestParticipationRate: '',
    listening: '',
    speaking: '',
    reading: '',
    writing: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenerate = () => {
    onGenerate(formData);
  };

  return (
    <div>
      <label>Student Name:</label>
      <input
        type="text"
        name="recipientName"
        value={formData.recipientName}
        onChange={handleChange}
        
      /><br />
      <label>Course Name:</label>
      <input
        type="text"
        name="courseName"
        value={formData.courseName}
        onChange={handleChange}
      /><br />
      <label>Completion Date:</label>
      <input
        type="text"
        name="completionDate"
        value={formData.completionDate}
        onChange={handleChange}
      /><br />
      <label>Ref:</label>
      <input
        type="text"
        name="referanceof"
        value={formData.referanceof}
        onChange={handleChange}
      /><br />
      <label>Student ID:</label>
      <input
        type="text"
        name="studentId"
        value={formData.studentId}
        onChange={handleChange}
      /><br />
      <label>Start Date:</label>
      <input
        type="text"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      /><br />
      <label>End Date:</label>
      <input
        type="text"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
      /><br />
      <label>Level Of Language Learning:</label>
      <input
        type="text"
        name="levelOfLanguageLearning"
        value={formData.levelOfLanguageLearning}
        onChange={handleChange}
      /><br />
      <label>Total Houre:</label>
      <input
        type="text"
        name="referenceBook"
        value={formData.referenceBook}
        onChange={handleChange}
      /><br />
      <label>Total Number of Classes:</label>
      <input
        type="text"
        name="totalNumberOfClasses"
        value={formData.totalNumberOfClasses}
        onChange={handleChange}
      /><br />
      <label>Total Number of Classes Per Day:</label>
      <input
        type="text"
        name="totalNumberOfClassesPerDay"
        value={formData.totalNumberOfClassesPerDay}
        onChange={handleChange}
      /><br />
      <label>Total Duration of Class per Week:</label>
      <input
        type="text"
        name="totalDurationOfClassPerWeek"
        value={formData.totalDurationOfClassPerWeek}
        onChange={handleChange}
      /><br />
      <label>Class Time:</label>
      <input
        type="text"
        name="classTime"
        value={formData.classTime}
        onChange={handleChange}
      /><br />
      <label>Applicant Attendance Rate:</label>
      <input
        type="text"
        name="applicantAttendanceRate"
        value={formData.applicantAttendanceRate}
        onChange={handleChange}
      /><br />
      <label>Class Test Participation Rate:</label>
      <input
        type="text"
        name="classTestParticipationRate"
        value={formData.classTestParticipationRate}
        onChange={handleChange}
      /><br />
      <label>Listening:</label>
      <input
        type="text"
        name="listening"
        value={formData.listening}
        onChange={handleChange}
      /><br />
      <label>Speaking:</label>
      <input
        type="text"
        name="speaking"
        value={formData.speaking}
        onChange={handleChange}
      /><br />
      <label>Reading:</label>
      <input
        type="text"
        name="reading"
        value={formData.reading}
        onChange={handleChange}
      /><br />
      <label>Writing:</label>
      <input
        type="text"
        name="writing"
        value={formData.writing}
        onChange={handleChange}
      /><br />
   
    <label>sl:</label>
      <input
        type="text"
        name="sl"
        value={formData.sl}
        onChange={handleChange}
      /><br />
      <label>Date Of Birth :</label>
      <input
        type="text"
        name="birth"
        value={formData.birth}
        onChange={handleChange}
      /><br />
      <label>Grade:</label>
      <input
        type="text"
        name="grade"
        value={formData.grade}
        onChange={handleChange}
      /><br />
      <label>fatherName :</label>
      <input
        type="text"
        name="fatherName"
        value={formData.fatherName}
        onChange={handleChange}
      /><br />
      <label>motherName:</label>
      <input
        type="text"
        name="motherName"
        value={formData.motherName}
        onChange={handleChange}
      /><br />
      <button onClick={handleGenerate}>Generate Certificate</button>
    </div>
  );
};

export default CertificateForm;
