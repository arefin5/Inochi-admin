import React from 'react';
import html2pdf from 'html2pdf.js';
import './certificate.css';

const CertificatePreview = ({ recipientName,
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
        id="certificate-container"
        className="certificate-container"
        style={{ height: '297mm', width: '210mm' }}
      >
        <div className='reFright'>
          <p>
            {referanceof}
          </p>
        </div>
        <div className='dateandref'>
          <p>
            {currentDate}
          </p>

        </div>
      
        <div className="text-overlay stname">
          <p className=''>{recipientName}</p>
        </div>
        <div className="text-overlay stId ">
          <p className=''>{studentId}</p>
        </div>
        <div className="text-overlay std ">
          <p>{startDate}</p>
        </div>
        <div className="text-overlay eId ">
          <p>{endDate}</p>

        </div>
        <div className="text-overlay level ">
          <p>{levelOfLanguageLearning}</p>

        </div>

        <div className="text-overlay ncl4 ">
        <p>{totalNumberOfClasses}</p>
        </div>
        <div className="text-overlay level1 ">
        <p>{referenceBook}</p>

        </div>
        <div className="text-overlay level2 ">
        <p>{totalNumberOfClassesPerDay}</p>

        </div>
        <div className="text-overlay level3 ">
        <p>{totalDurationOfClassPerWeek}</p>

        </div>
        <div className="text-overlay level4 ">
        <p>{classTime}</p>

        </div>
        <div className="text-overlay level5 ">
        <p>{applicantAttendanceRate}</p>

        </div>
        <div className="text-overlay level6 ">
        <p>{classTestParticipationRate}</p>

        </div>
        {/*  */}
        <div className='skil-overley '>
          <p>{listening}</p>
        </div>
        <div className='skil-overleytwo'>
          <p>{speaking}</p>
        </div>
        <div className='skil-overleythr '>
          <p>{reading}</p>
        </div>
        <div className='skil-overleyfour '>
          <p>{writing}</p>
        </div>
      </div>
      <button onClick={handleDownload}>Download as PDF</button>
    </>
  );
};

export default CertificatePreview;