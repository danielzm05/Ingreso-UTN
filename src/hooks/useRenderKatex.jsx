import parse from "html-react-parser";
import {InlineMath} from "react-katex";
import "katex/dist/katex.min.css";

export const useRenderKatex = (htmlString="") => 
parse(htmlString, {
  replace: (domNode) => {
    if (domNode.name === "math") {
      return <InlineMath math={domNode.children[0].data} />;
    }
  },
});
