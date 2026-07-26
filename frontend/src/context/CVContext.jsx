import React, { createContext, useState, useContext } from 'react';

const CVContext = createContext();

export const useCV = () => {
  const context = useContext(CVContext);
  if (!context) {
    throw new Error('useCV must be used within a CVProvider');
  }
  return context;
};

export const CVProvider = ({ children }) => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const openCVModal = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsCVModalOpen(true);
  };

  const closeCVModal = () => {
    setIsCVModalOpen(false);
  };

  const handleDownloadCV = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    // Directly trigger programmatic download of the CV PDF file
    const link = document.createElement('a');
    link.href = '/Trupti_Parmar_CV.pdf';
    link.setAttribute('download', 'Trupti_Parmar_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <CVContext.Provider 
      value={{ 
        isCVModalOpen, 
        openCVModal, 
        closeCVModal, 
        handleDownloadCV 
      }}
    >
      {children}
    </CVContext.Provider>
  );
};
