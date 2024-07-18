"use client"
import React, { useContext } from 'react';
import { IssueContext } from './context/issueContext';

type DownloadButtonProps = {
    issue: string;
};

const DownloadButton = () => {
  const [selectedIssue, setSelectedIssue] = useContext(IssueContext) as [string, (issue: string) => void];
  const handleDownload = () => {
    // Create an anchor element and set its attributes for download
    const element = document.createElement('a');
    const fileUrl = `./pdfs/issue${selectedIssue}.pdf`; // URL of the file to be downloaded
    element.href = fileUrl;
    element.setAttribute('download', `Function-And-Fashion-Issue${selectedIssue}.pdf`); // Suggest a filename for download
    document.body.appendChild(element); // Append to the document
    element.click(); // Programmatically click the element to trigger the download
    document.body.removeChild(element); // Clean up
  };

  return (
    <button className='download-button' onClick={handleDownload}>Download Issue as a PDF</button>
  );
};

export default DownloadButton;