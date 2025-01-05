import { useState } from "react";
import { Document, Page } from "react-pdf";

export function PDfViewer({ url, page }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>
      <p className="text-text2 font-semibold">
        Pagina {pageNumber} de {numPages}
      </p>
    </div>
  );
}
