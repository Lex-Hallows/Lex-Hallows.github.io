"use client"
import React from 'react';

type DownloadButtonProps = {
    issue: string;
};

const DownloadButton = ({issue}:DownloadButtonProps) => {
  const handleDownload = () => {
    // Create an anchor element and set its attributes for download
    const element = document.createElement('a');
    const fileUrl = `./pdfs/issue${issue}.pdf`; // URL of the file to be downloaded
    element.href = fileUrl;
    element.setAttribute('download', `Function-And-Fashion-Issue${issue}.pdf`); // Suggest a filename for download
    document.body.appendChild(element); // Append to the document
    element.click(); // Programmatically click the element to trigger the download
    document.body.removeChild(element); // Clean up
  };

  return (
    <button className='download-button' onClick={handleDownload}>Download File</button>
  );
};

export default DownloadButton;