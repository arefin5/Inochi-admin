import React from 'react';
import html2pdf from 'html2pdf.js';
import "./certificate.css";

const CertificatePreview = ({ recipientName }) => {
  const handleDownload = () => {
    const containerElement = document.getElementById('certificate-container');

    html2pdf(containerElement, {
      margin: 10,
      filename: 'certificate.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 }, // Set scale to 1 to avoid scaling
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      output: 'blob', // Use 'blob' output to ensure the full-size image is included
    })
    .then((pdf) => {
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
        style={{ height: '1500px', width: '1500px' }}
      >
        <h2>Certificate of Achievement</h2>
        <p>This is to certify that</p>
        <p>{recipientName}</p>
        <p>has successfully completed the course.</p>
      </div>
      <button onClick={handleDownload}>Download as PDF</button>
    </>
  );
};

export default CertificatePreview;
