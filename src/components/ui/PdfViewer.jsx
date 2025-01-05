import { useState } from "react";
import { Document, Page } from "react-pdf";

export function PDfViewer({ url }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={3} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
