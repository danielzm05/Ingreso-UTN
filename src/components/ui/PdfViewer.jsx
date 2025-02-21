import { useState } from "react";
import { Document, Page } from "react-pdf";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";

export function PDfViewer({ url, page = 1 }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(page);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col gap-2">
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>
      <div className="flex gap-2">
        <Button className="p-2 text-text1 bg-background rounded-sm" onClick={() => setPageNumber(pageNumber === 1 ? 1 : pageNumber - 1)}>
          <ChevronLeft size={14} />
        </Button>
        <span className="grid place-content-center w-8 h-8 text-text1 bg-background2 rounded-sm">{pageNumber}</span>
        <Button
          className="p-2 text-text1 bg-background rounded-sm"
          onClick={() => setPageNumber(pageNumber === numPages ? numPages : pageNumber + 1)}
        >
          <ChevronRight size={14} />
        </Button>
      </div>
    </div>
  );
}
