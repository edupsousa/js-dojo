import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import { useState } from "react";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

function DojoEditor() {
  const [code, setCode] = useState("function add(a, b) {\n  return a + b;\n}");
  return (
    <Editor
      className="dojoEditor"
      value={code}
      onValueChange={(code) => setCode(code)}
      highlight={(code) => highlight(code, languages.javascript, "javascript")}
      padding={10}
    />
  );
}

export default DojoEditor;
