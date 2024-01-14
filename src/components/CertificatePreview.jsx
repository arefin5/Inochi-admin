import React from 'react';
import html2pdf from 'html2pdf.js';
import './certificate.css';

const CertificatePreview = ({ recipientName,
   courseName,
    completionDate,
    referanceof,
    studentId ,
    startDate,
    endDate,
    levelOfLanguageLearning,
    referenceBook,
    totalNumberOfClasses,
    totalNumberOfClassesPerDay,
    totalDurationOfClassPerWeek,
    classTime,
    applicantAttendanceRate,
    classTestParticipationRate,
    listening,
    speaking,
    reading,
    writing,

 }) => {
  const handleDownload = () => {
    const containerElement = document.getElementById('certificate-container');

    html2pdf(containerElement, {
      filename: 'certificate.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1.5 }, // Adjust the scale as needed
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      output: 'blob',
    }).then((pdf) => {
      const blob = new Blob([pdf], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'certificate.pdf';
      link.click();
    });
  };

  return (
    <>
      <div
        id="certificate-container"
        className="certificate-container"
        style={{ height: '297mm', width: '210mm' }}
      >
        <div className="text-overlay">
          <p className=''>{recipientName}</p>
          <p className='courseName'>{courseName}</p>
          <p className='completionDate'>{completionDate}</p>
          <p>{studentId}</p>
          <p>{startDate}</p>
          <p> </p>
          <p>{endDate}</p>
          <p>{levelOfLanguageLearning}</p>
          <p>{totalNumberOfClasses}</p>
          <p>{totalNumberOfClassesPerDay}</p>
          <p>{totalDurationOfClassPerWeek}</p>
          <p>{classTime}</p>
          <p>{applicantAttendanceRate}</p>
          <p>{classTestParticipationRate}</p>
          <p>{listening}</p>
          <p>{speaking}</p>
          <p>{reading}</p>
          <p>{writing}</p>
        </div>
      </div>
      <button onClick={handleDownload}>Download as PDF</button>
    </>
  );
};

export default CertificatePreview;