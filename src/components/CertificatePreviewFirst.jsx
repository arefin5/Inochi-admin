import React from 'react';
import html2pdf from 'html2pdf.js';
import './certificateF.css';

const CertificatePreviewFirst = ({ recipientName,
  studentId,
  startDate,
  endDate,
  sl,
  referenceBook,
    birth,
    grade,
    fatherName,
    motherName,
    
    

}) => {
  const handleDownload = () => {
    const containerElement = document.getElementById('certificate-containerf');

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
      link.download = 'certificatey.pdf';
      link.click();
    });
  };
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
  };
  const currentDate = formatDate(new Date());

  // ...


  return (
    <>
      <div
        id="certificate-containerf"
        className="certificate-containerf"
        style={{ height: '297mm', width: '210mm' }}
      >
        <div className='sl'>
          <p>
            {sl}
          </p>
        </div>
        {/* <div className='dateandreff'>
          <p>
           {sl}
          </p>
        </div> */}
        <div className='nameOfStd'>
          <p>
           {recipientName}
          </p>
        </div>
        {/* birth */}
        <div className='birth'>
          <p>
           {birth}
          </p>
        </div>
        {/*  */}
        <div className='fname'>
          <p>
           {fatherName}
          </p>
        </div>
        {/*  */}
        <div className='mname'>
          <p>
           {motherName}
          </p>
        </div>
        {/* stid */}
        <div className='stid'>
          <p>
           {studentId}
          </p>
        </div>
         <div className='stid'>
          <p>
           {studentId}
          </p>
        </div>
        <div className='comHour'>
          <p>
           {referenceBook}
          </p>
        </div>
<div className='grade'>
          <p>
           {grade}
          </p>
        </div>
        {/* startD */}
        <div className='startDateS'>
          <p>
           {startDate}
          </p>
        </div>
<div className='endDates'>
          <p>
           {endDate}
          </p>
        </div>
              </div>
      <button onClick={handleDownload}>Download as PDF</button>
    </>
  );
};

export default CertificatePreviewFirst;