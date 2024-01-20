import React from 'react';
import html2pdf from 'html2pdf.js';
import './certificateF.css';

const CertificatePreviewFirst = ({ recipientName,
  courseName,
  completionDate,
  referanceof,
  studentId,
  startDate,
  endDate,
  levelOfLanguageLearning,
  totalNumberOfClasses,
  totalNumberOfClassesPerDay,
  totalDurationOfClassPerWeek,
  classTime,
  referenceBook,
  applicantAttendanceRate,
  classTestParticipationRate,
  listening,
  speaking,
  reading,
  writing,

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
        <div className='reFrightf'>
          <p>
            {referanceof}
          </p>
        </div>
        <div className='dateandreff'>
          <p>
            {currentDate}
          </p>

        </div>
      
        
      </div>
      <button onClick={handleDownload}>Download as PDF</button>
    </>
  );
};

export default CertificatePreviewFirst;