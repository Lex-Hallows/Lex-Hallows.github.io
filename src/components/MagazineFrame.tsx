"use client"
import { useState, useRef, useEffect } from "react";
import MagazineButtons from "./MagazineButtons";
import * as pdfjsLib from "pdfjs-dist";
import 'pdfjs-dist/build/pdf.worker';
export type MagazineFrameProps = {
  pages: string[];
};

export default function MagazineFrame({pages}: MagazineFrameProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrentPage(0);
  },[pages])

  useEffect(() => {
    if (!loading){
    console.log('rendering page', currentPage);
    const fetchPage = async () => {
      const loadingTask = pdfjsLib.getDocument(pages[currentPage]);
      const pdf = await loadingTask.promise;
      renderPage(pdf);
    };
    fetchPage();
  }
  }, [currentPage, pages]);

  

  const renderPage = async (pdf: pdfjsLib.PDFDocumentProxy) => {
    setLoading(true);
    console.log('rendering page', currentPage);
    const page = await pdf.getPage(1);
    const scale = 1.25;
    const viewport = page.getViewport({ scale });
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    canvas!.height = viewport.height;
    canvas!.width = viewport.width;

    const renderContext = {
      canvasContext: context!,
      viewport: viewport,
    };

    await page.render(renderContext).promise;
    setLoading(false);
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
 

  return (
    <div className="view-container">
      
      
      {currentPage > 0 && <MagazineButtons clickFunction={prevPage} text="<"  />}
      
    
      <canvas ref={canvasRef}id='canvas'></canvas>
      {currentPage<pages.length-1 && <MagazineButtons clickFunction={nextPage} text=">" />}
    </div>
  );
}
