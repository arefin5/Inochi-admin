import React from 'react';
import html2pdf from 'html2pdf.js';
import './certificatelast.css';
// slNo Name DateOfBirth FatherName mothername StudentId totalHours  grade start en
const CertificatePreviewLast = ({ 
    recipientName,
  completionDate,
  studentId,
  startDate,
  endDate,
  sl,
  birth,
  grade,
  fatherName,
  motherName,
}) => {
  const handleDownload = () => {
    const containerElement = document.getElementById('certificate-container-last');

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
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
  };
  const currentDate = formatDate(new Date());

  return (
    <>
      <div
        id="certificate-container-last"
        className="last-cer"
      >
        <div className='sl' style={{ position: 'absolute', top: '50px', left: '50px' ,zIndex: 1}}>
          <p>{sl}</p>
        </div>
        <div className='' style={{ position: 'absolute', top: '100px', left: '50px' }}>
          <p>{startDate}</p>
        </div>
      </div>
      <button onClick={handleDownload}>Download as PDF</button>
    </>
);

};

export default CertificatePreviewLast








